webpackHotUpdate(2,{

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(67);
	var search_results_service_1 = __webpack_require__(486);
	var search_component_1 = __webpack_require__(336);
	var _ = __webpack_require__(705);
	var SearchResults = (function () {
	    function SearchResults(searchResultsService, routeParams) {
	        var _this = this;
	        this.searchResultsService = searchResultsService;
	        this.routeParams = routeParams;
	        this.products = [];
	        this.searchTerm = '';
	        this.isList = true;
	        this.searchTerm = routeParams.params["q"];
	        this.searchResultsService.getAll(this.searchTerm)
	            .subscribe(function (result) {
	            _this.products = result.map(function (x) {
	                var sum = _.sumBy(x.scrapeResults, function (o) { return o.rating; });
	                x.avgRating = sum / x.scrapeResults.length;
	                x.avgRatingFloor = Math.floor(x.avgRating);
	                x.scrapeResults = x.scrapeResults.map(function (y) {
	                    y.website = _this.getWebsite(y.src);
	                    return y;
	                });
	                return x;
	            });
	        });
	    }
	    SearchResults.prototype.ngOnInit = function () {
	        console.log('hello `Search Results` component');
	    };
	    SearchResults.prototype.getWebsite = function (src) {
	        switch (src) {
	            case 1: return 'MakeupAlley';
	            case 2: return 'Boots';
	            case 3: return 'Amazon';
	            case 4: return 'Superdrug';
	        }
	    };
	    SearchResults = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'search-results',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                search_results_service_1.SearchResultsService
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [search_component_1.Search],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            //styles: [require('./home.css')],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(513)
	        }), 
	        __metadata('design:paramtypes', [search_results_service_1.SearchResultsService, router_deprecated_1.RouteParams])
	    ], SearchResults);
	    return SearchResults;
	}());
	exports.SearchResults = SearchResults;
	var Product = (function () {
	    function Product(name, scrapeResults, avgRating, avgRatingFloor) {
	        this.name = name;
	        this.scrapeResults = scrapeResults;
	        this.avgRating = avgRating;
	        this.avgRatingFloor = avgRatingFloor;
	    }
	    return Product;
	}());
	exports.Product = Product;
	var ProductScrape = (function () {
	    function ProductScrape(rating, src, url, website) {
	        this.rating = rating;
	        this.src = src;
	        this.url = url;
	        this.website = website;
	    }
	    return ProductScrape;
	}());
	exports.ProductScrape = ProductScrape;
	

/***/ }

})
//# sourceMappingURL=main.map