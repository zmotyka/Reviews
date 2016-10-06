using Abot.Poco;
using HtmlAgilityPack;
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
                result = new ScrapeResult { AbsolutePath = page.Uri.AbsoluteUri, WebsiteSource = WebsiteSource.Boots };

                var htmlAgilityPackDocument = page.HtmlDocument; //Html Agility Pack parser
                var productContainer = htmlAgilityPackDocument.GetElementbyId("main");
                var ratingContainer = htmlAgilityPackDocument.GetElementbyId("product-details");
                var productName = productContainer != null ? productContainer.Descendants("h1").FirstOrDefault() : null;
                var rating = ratingContainer != null ? ratingContainer.Descendants("h3").FirstOrDefault() : null;
                if (productName != null && rating != null)
                {
                    result.ProductName = HtmlEntity.DeEntitize(productName.InnerText.TrimString());
                    result.Rating = HtmlEntity.DeEntitize(rating.InnerText.TrimString());
                }
            }
            return result;
        }
    }
}
