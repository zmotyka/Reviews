using Abot.Crawler;
using Abot.Poco;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Reviews.Crawler
{
    class Program
    {
        static void Main()
        {
            var crawler = new CrawlerManager();
            crawler.Crawl();
        }
    }

    public class CrawlerManager
    {
        private readonly MongoManager _mongoManager;

        public CrawlerManager()
        {
            _mongoManager = new MongoManager();
        }
        public void Crawl()
        {
            var url = "https://www.makeupalley.com/product/latest.asp";
            PoliteWebCrawler crawler = new PoliteWebCrawler();
            crawler.PageCrawlStartingAsync += crawler_ProcessPageCrawlStarting;
            crawler.PageCrawlCompletedAsync += crawler_ProcessPageCrawlCompleted;
            crawler.PageCrawlDisallowedAsync += crawler_PageCrawlDisallowed;
            crawler.PageLinksCrawlDisallowedAsync += crawler_PageLinksCrawlDisallowed;


            CrawlResult result = crawler.Crawl(new Uri(url)); //This is synchronous, it will not go to the next line until the crawl has completed

            if (result.ErrorOccurred)
                Console.WriteLine("Crawl of {0} completed with error: {1}", result.RootUri.AbsoluteUri, result.ErrorException.Message);
            else
                Console.WriteLine("Crawl of {0} completed without error.", result.RootUri.AbsoluteUri);
        }

        void crawler_ProcessPageCrawlStarting(object sender, PageCrawlStartingArgs e)
        {
            PageToCrawl pageToCrawl = e.PageToCrawl;
            Console.WriteLine("About to crawl link {0} which was found on page {1}", pageToCrawl.Uri.AbsoluteUri, pageToCrawl.ParentUri.AbsoluteUri);
        }

        async void crawler_ProcessPageCrawlCompleted(object sender, PageCrawlCompletedArgs e)
        {
            CrawledPage crawledPage = e.CrawledPage;
            if (crawledPage.WebException != null || crawledPage.HttpWebResponse.StatusCode != HttpStatusCode.OK)
            {
                Console.WriteLine("Crawl of page failed {0}", crawledPage.Uri.AbsoluteUri);
                return;
            }
            else
            {
                Console.WriteLine("Crawl of page succeeded {0}", crawledPage.Uri.AbsoluteUri);
            }

            if (string.IsNullOrEmpty(crawledPage.Content.Text))
            {
                Console.WriteLine("Page had no content {0}", crawledPage.Uri.AbsoluteUri);
                return;
            }

            var htmlAgilityPackDocument = crawledPage.HtmlDocument; //Html Agility Pack parser
            var angleSharpHtmlDocument = crawledPage.AngleSharpHtmlDocument; //AngleSharp parser

            if (crawledPage.Uri.PathAndQuery.Contains("ItemId="))
            {
                var productName = htmlAgilityPackDocument.GetElementbyId("main").Descendants("h1").First().InnerHtml;
                var rating = htmlAgilityPackDocument.GetElementbyId("product-details").Descendants("h3").First().InnerHtml;
                await _mongoManager.AddStuff(productName, rating, crawledPage.Uri.AbsolutePath, "Ashleyvalley");
            }

        }

        void crawler_PageLinksCrawlDisallowed(object sender, PageLinksCrawlDisallowedArgs e)
        {
            CrawledPage crawledPage = e.CrawledPage;
            Console.WriteLine("Did not crawl the links on page {0} due to {1}", crawledPage.Uri.AbsoluteUri, e.DisallowedReason);
        }

        void crawler_PageCrawlDisallowed(object sender, PageCrawlDisallowedArgs e)
        {
            PageToCrawl pageToCrawl = e.PageToCrawl;
            Console.WriteLine("Did not crawl page {0} due to {1}", pageToCrawl.Uri.AbsoluteUri, e.DisallowedReason);
        }


    }

    public class MongoManager
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
        public MongoManager()
        {
            _client = new MongoClient();
            _database = _client.GetDatabase("test");
        }
        
        public async Task AddStuff(string name, string rating, string url, string src)
        {
            var document = new BsonDocument
            {
                { "name", name },
                { "url", url },
                { "rating", rating },
                { "src", src }
            };

            var collection = _database.GetCollection<BsonDocument>("reviews");
            await collection.InsertOneAsync(document);
        }
    }
}
