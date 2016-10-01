using Abot.Crawler;
using Abot.Poco;
using System;
using System.Net;

namespace Reviews.Crawler
{
    public class CrawlerManager
    {
        private readonly MongoManager _mongoManager;
        private readonly WebsiteSource _websiteSource;

        public CrawlerManager(WebsiteSource websiteSource)
        {
            _mongoManager = new MongoManager();
            _websiteSource = websiteSource;
        }

        public void Crawl()
        {
            _mongoManager.CleanScrapeResults();
            PoliteWebCrawler crawler = new PoliteWebCrawler();
            crawler.PageCrawlStartingAsync += crawler_ProcessPageCrawlStarting;
            crawler.PageCrawlCompletedAsync += crawler_ProcessPageCrawlCompleted;
            crawler.PageCrawlDisallowedAsync += crawler_PageCrawlDisallowed;
            crawler.PageLinksCrawlDisallowedAsync += crawler_PageLinksCrawlDisallowed;

            CrawlResult result = crawler.Crawl(new Uri(_websiteSource.BaseUrl)); //This is synchronous, it will not go to the next line until the crawl has completed

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

            var scrapeResult = _websiteSource.Scraper.GetScrapeResult(crawledPage);
            if (scrapeResult != null)
            {
                await _mongoManager.AddScrapeResult(scrapeResult);
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
}
