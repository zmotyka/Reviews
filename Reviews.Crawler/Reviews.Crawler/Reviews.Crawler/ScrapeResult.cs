namespace Reviews.Crawler
{
    public class ScrapeResult
    {
        public string ProductName { get; set; }
        public string Rating { get; set; }
        public string AbsolutePath { get; set; }
        public WebsiteSource WebsiteSource { get; set; }
    }
}
