using Abot.Poco;
using Reviews.Crawler.Util;
using System.Linq;

namespace Reviews.Crawler.Scrapers
{
    public class MakeupAlleyScraper : IScraper
    {
        public ScrapeResult GetScrapeResult(CrawledPage page)
        {
            ScrapeResult result = null;
            //var angleSharpHtmlDocument = crawledPage.AngleSharpHtmlDocument; //AngleSharp parser
            if (page.Uri.PathAndQuery.Contains("ItemId="))
            {
                var htmlAgilityPackDocument = page.HtmlDocument; //Html Agility Pack parser
                var productContainer = htmlAgilityPackDocument.GetElementbyId("main");
                var ratingContainer = htmlAgilityPackDocument.GetElementbyId("product-details");
                var productName = productContainer != null ? productContainer.Descendants("h1").FirstOrDefault() : null;
                var rating = ratingContainer != null ? ratingContainer.Descendants("h3").FirstOrDefault() : null;
                if (productName != null && rating != null)
                {
                    result = new ScrapeResult
                    {
                        ProductName = productName.InnerText.TrimString(),
                        Rating = rating.InnerText.TrimString(),
                        AbsolutePath = page.Uri.AbsolutePath,
                        WebsiteSource = WebsiteSource.MakeupAlley
                    };
                }
            }
            return result;
        }
    }
}
