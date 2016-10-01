using Abot.Poco;

namespace Reviews.Crawler.Scrapers
{
    public interface IScraper
    {
        ScrapeResult GetScrapeResult(CrawledPage page);
    }
}