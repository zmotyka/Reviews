using FuzzyString;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reviews.Crawler
{
    public class MongoManager
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
        public MongoManager()
        {
            _client = new MongoClient();
            _database = _client.GetDatabase("reviewsDb");
        }

        public void CleanScrapeResults()
        {
            _database.DropCollection("scrapeResult");
        }

        public async Task AddScrapeResult(ScrapeResult scrapeResult)
        {
            var collection = _database.GetCollection<BsonDocument>("scrapeResult");
            await collection.InsertOneAsync(GetScrapeResultDoc(scrapeResult));
        }

        public async Task AddErroredScrapeResult(ScrapeResult scrapeResult)
        {
            var collection = _database.GetCollection<BsonDocument>("erroredScrapeResult");
            await collection.InsertOneAsync(GetScrapeResultDoc(scrapeResult));
        }

        private BsonDocument GetScrapeResultDoc(ScrapeResult scrapeResult)
        {
            return new BsonDocument
            {
                { "name", scrapeResult.ProductName ?? "" },
                { "url", scrapeResult.AbsolutePath },
                { "rating", scrapeResult.Rating ?? "" },
                { "website", scrapeResult.WebsiteSource.Value }
            };
        }

        public async Task ProcessScrapeResults()
        {
            //_database.DropCollection("scrapeResult");
            //_database.DropCollection("reviews");
            //return;

            var collection = _database.GetCollection<BsonDocument>("scrapeResult");
            var revCollection = _database.GetCollection<BsonDocument>("reviews");

            using (var cursor = await collection.FindAsync(new BsonDocument()))
            {
                while (await cursor.MoveNextAsync())
                {
                    foreach (var document in cursor.Current)
                    {
                        var matchingDocument = await FindApproximateProduct(document["name"].AsString);
                        if (matchingDocument != null)
                        {
                            var scrapeResults = matchingDocument["scrapeResults"].AsBsonArray;
                            var specificScrapeResult = scrapeResults.FirstOrDefault(x => x.AsBsonDocument["website"].AsInt32 == document["website"].AsInt32);
                            if (specificScrapeResult != null)
                            {
                                specificScrapeResult["url"] = document["url"].AsString;
                                specificScrapeResult["rating"] = document["rating"].AsDouble;
                            }
                            else
                            {
                                scrapeResults.Add(new BsonDocument
                                {
                                    { "url", document["url"].AsString },
                                    { "rating", document["rating"].AsDouble },
                                    { "website", document["website"].AsInt32 }
                                });
                            }

                            var filter = Builders<BsonDocument>.Filter.Eq("_id", document["_id"].AsObjectId);
                            var update = Builders<BsonDocument>.Update.Set("scrapeResults", scrapeResults);
                            await collection.UpdateOneAsync(filter, update);
                        }
                        else
                        {
                            var newReview = new BsonDocument
                            {
                                { "name", document["name"].AsString },
                                { "scrapeResults", new BsonArray {
                                    new BsonDocument
                                    {
                                        { "url", document["url"].AsString },
                                        { "rating", document["rating"].AsDouble },
                                        { "website", document["website"].AsInt32 }
                                    }}
                                }
                            };
                            await revCollection.InsertOneAsync(newReview);
                        }
                    }
                }
            }
        }

        private async Task<BsonDocument> FindApproximateProduct(string name)
        {
            var revCollection = _database.GetCollection<BsonDocument>("reviews");
            using (var cursor = await revCollection.FindAsync(new BsonDocument()))
            {
                while (await cursor.MoveNextAsync())
                {
                    foreach (var document in cursor.Current)
                    {
                        if (ComparisonMetrics.ApproximatelyEquals(document["name"].AsString, name, new[] { FuzzyStringComparisonOptions.UseLevenshteinDistance }.ToList(), FuzzyStringComparisonTolerance.SuperStrong))
                        {
                            return document;
                        }
                    }
                }
            }
            return null;
        }
    }
}
