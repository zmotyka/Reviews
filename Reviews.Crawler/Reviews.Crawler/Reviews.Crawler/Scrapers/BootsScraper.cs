using Abot.Poco;
using HtmlAgilityPack;
using Reviews.Crawler.Util;
using System.Linq;

namespace Reviews.Crawler.Scrapers
{
    public class BootsScraper : IScraper
    {
        public ScrapeResult GetScrapeResult(CrawledPage page)
        {
            ScrapeResult result = null;
            var htmlAgilityPackDocument = page.HtmlDocument; //Html Agility Pack parser
            var productDetailsContainer = htmlAgilityPackDocument.GetElementbyId("pd_rdf_product");

            if (productDetailsContainer != null)
            {
                result = new ScrapeResult { AbsolutePath = page.Uri.AbsoluteUri, WebsiteSource = WebsiteSource.Boots };

                var productNameContainer = productDetailsContainer.Descendants("h1").FirstOrDefault();
                var ratingContainer = productDetailsContainer.Descendants("span").FirstOrDefault(x => x.Attributes["itemprop"] != null && x.Attributes["itemprop"].Value == "ratingValue");
                if (productNameContainer != null && ratingContainer != null)
                {
                    RemoveComments(productNameContainer);
                    RemoveComments(ratingContainer);

                    result.ProductName = HtmlEntity.DeEntitize(productNameContainer.InnerText.TrimString());
                    result.Rating = HtmlEntity.DeEntitize(ratingContainer.InnerText.TrimString());
                }
            }
            return result;
        }
        public static void RemoveComments(HtmlNode node)
        {
            foreach (var n in node.ChildNodes.ToArray())
                RemoveComments(n);
            if (node.NodeType == HtmlNodeType.Comment)
                node.Remove();
        }
    }
}
