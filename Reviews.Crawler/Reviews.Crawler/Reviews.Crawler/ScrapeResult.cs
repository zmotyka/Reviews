namespace Reviews.Crawler
{
    public class ScrapeResult
    {
        public string ProductName { get; set; }
        public string Rating { get; set; }
        public string AbsolutePath { get; set; }
        public WebsiteSource WebsiteSource { get; set; }

        public bool IsValid()
        {
            double r;
            return
                !string.IsNullOrWhiteSpace(ProductName) &&
                !string.IsNullOrWhiteSpace(Rating) &&
                double.TryParse(Rating, out r) &&
                !string.IsNullOrWhiteSpace(AbsolutePath);
        }
    }
}
