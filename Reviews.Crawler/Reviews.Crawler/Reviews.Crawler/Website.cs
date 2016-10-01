using Reviews.Crawler.Scrapers;
using Reviews.Crawler.Util;

namespace Reviews.Crawler
{
    public class WebsiteSource : Enumeration
    {
        public static readonly WebsiteSource MakeupAlley = new WebsiteSource(1, "MakeupAlley", "https://www.makeupalley.com/product/latest.asp", new MakeupAlleyScraper());
        public static readonly WebsiteSource Boots = new WebsiteSource(2, "Boots", "http://www.boots.com/en/Beauty/", new BootsScraper());
        public static readonly WebsiteSource Amazon = new WebsiteSource(3, "Amazon", "", new AmazonScraper());
        public static readonly WebsiteSource Superdrug = new WebsiteSource(4, "Superdrug", "", new SuperdrugScraper());

        public string BaseUrl { get; set; }
        public IScraper Scraper { get; set; }
        
        private WebsiteSource() { }
        private WebsiteSource(int value, string displayName, string baseUrl, IScraper scraper) : base(value, displayName)
        {
            BaseUrl = baseUrl;
            Scraper = scraper;
        }
    }
}
