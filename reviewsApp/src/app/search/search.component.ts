import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {RouteParams, Router} from '@angular/router-deprecated';

import * as _ from 'lodash';

// Import NgFor directive
import {NgFor} from '@angular/common';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'r-search',  
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
    ],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    //styles: [require('./home.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./search.html')
})
export class Search {
    searchData = {
        searchTerm: ''
    };

    constructor(public router: Router, public routeParams: RouteParams) {
        var q = routeParams.params["q"];
        if (q) {
            this.searchData.searchTerm = q;
        }
    }

    onSubmit() {
        this.router.navigate(['SearchResults', { q: this.searchData.searchTerm }]);
    }

    keyDownFunction(event) {
        if (event.keyCode == 13) {
            this.onSubmit();
        }
    }

    ngOnInit() {
        console.log('hello `Search` component');
    }
}
