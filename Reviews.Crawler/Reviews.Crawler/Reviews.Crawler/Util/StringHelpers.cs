using System.Text.RegularExpressions;

namespace Reviews.Crawler.Util
{
    public static class StringHelpers
    {
        public static string TrimString(this string OldString)
        {
            return Regex.Replace(OldString, @"\t |\n |\r", "").Trim();
        }
    }
}
