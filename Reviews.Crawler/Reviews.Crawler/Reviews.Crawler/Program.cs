using System.Threading.Tasks;

namespace Reviews.Crawler
{
    class Program
    {
        static void Main()
        {
            Crawl(WebsiteSource.MakeupAlley);

            //var task = ProcessCrawlResult();
            //task.Wait();
        }

        private static void Crawl(WebsiteSource websiteSource)
        {
            var crawler = new CrawlerManager(websiteSource);
            crawler.Crawl();
        }

        private static async Task ProcessCrawlResult()
        {
            var crawlResultProcessor = new CrawlerResultProcessor();
            await crawlResultProcessor.Process();
        }
    }
}
