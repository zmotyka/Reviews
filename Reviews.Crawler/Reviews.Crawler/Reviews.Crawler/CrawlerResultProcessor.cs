using System.Threading.Tasks;

namespace Reviews.Crawler
{
    public class CrawlerResultProcessor
    {
        public async Task Process()
        {
            var mongoManager = new MongoManager();
            await mongoManager.ProcessScrapeResults();
        }
    }
}
