import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {RouteParams, Router} from '@angular/router-deprecated';

import {SearchResultsService} from './search-results.service';
import {Search} from '../search/search.component';
import * as _ from 'lodash';

// Import NgFor directive
import {NgFor} from '@angular/common';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'search-results',  
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
        SearchResultsService
    ],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [Search],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    //styles: [require('./home.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./search-results.html')
})
export class SearchResults {
    private products: Array<Product> = [];
    private searchTerm: string = '';
    private isList: boolean = true;

    constructor(public searchResultsService: SearchResultsService, public routeParams: RouteParams) {
        this.searchTerm = routeParams.params["q"];
        this.searchResultsService.getAll(this.searchTerm)
            .subscribe((result: Product[]) => {
                this.products = result.map(x => {
                    let sum = _.sumBy(x.scrapeResults, function (o) { return o.rating; });
                    x.avgRating = sum / x.scrapeResults.length;
                    return x;
                });
            });
    }

    listClick(event) {
        this.isList = true;
        event.preventDefault();
    }

    gridClick(event) {
        this.isList = false;
        event.preventDefault();
    }

    seeDetails(event) {
        event.preventDefault();
    }

    ngOnInit() {
        console.log('hello `Search Results` component');
    }
}

export class Product {
    constructor(public name: string, public scrapeResults: ProductScrape[], public avgRating: number) {
    }
}

export class ProductScrape {
    constructor(public rating: number, public src: string, public url: string) {
    }
}