webpackHotUpdate(2,{

/***/ 513:
/***/ function(module, exports) {

	module.exports = "<div class=\"intro-header small-header\">\r\n    <div class=\"search-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-sm-offset-3\">\r\n                    <r-search></r-search>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"search-results-stats\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-sm-offset-3\">\r\n                <h4>{{products.length}} products found related to \"{{searchTerm}}\"</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"content-section-a\">\r\n    <div class=\"container\">\r\n\r\n        <div id=\"products\" class=\"row list-group\">\r\n            <div class=\"item col-sm-4\" *ngFor=\"let product of products; let i = index\">\r\n                <div class=\"thumbnail\">\r\n                    <div class=\"rating rate-{{product.avgRatingFloor}}\">{{product.avgRating}}</div>\r\n                    <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/000/fff\" alt=\"\" />\r\n                    <div class=\"caption\">\r\n                        <h4 class=\"group inner list-group-item-heading\">\r\n                            {{ product.name }}\r\n                        </h4>\r\n\r\n                        <div class=\"dropdown rating-source\">\r\n                            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"ratingSourceDropdown{{i}}\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                                Rating sources <span class=\"text-muted\">({{product.scrapeResults.length}})</span>\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul class=\"dropdown-menu\" [attr.aria-labelledby]=\"'ratingSourceDropdown' + i\">\r\n                                <li *ngFor=\"let scrapeResult of product.scrapeResults\">\r\n                                    <a href=\"{{scrapeResult.url}}\">{{scrapeResult.website}} ({{scrapeResult.rating}})</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <!--<div class=\"media\" *ngFor=\"let product of products\">\r\n                <div class=\"media-left\">\r\n                    <a href=\"#\">\r\n                        <img class=\"media-object\" src=\"...\" alt=\"...\">\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"media-heading\">{{ product.name }}</h4>\r\n                    <p>Rating: {{product.avgRating}}</p>\r\n                    <div *ngFor=\"let scrapeResult of product.scrapeResults\">\r\n                        <p>{{scrapeResult.url}}</p>\r\n                        <p>{{scrapeResult.rating}}</p>\r\n                        <p>{{scrapeResult.website}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }

})
//# sourceMappingURL=main.map