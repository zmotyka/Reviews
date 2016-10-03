import {Component} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';
import {HomeService} from './home.service';


// Import NgFor directive
import {NgFor} from '@angular/common';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
        Title,
        HomeService
    ],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
        XLarge,
        NgFor
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./home.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./home.html')
})
export class Home {
    searchData = {
        searchTerm: ''
    };
    private reviews: Array<Review> = [];
    constructor(public homeService: HomeService) {
    }

    onSubmit() {
        this.homeService.getAll(this.searchData.searchTerm)
            .subscribe((result) => {
                this.reviews = result;
                //this.reviews = _.map(result, function (element) {
                //    return _.extend({}, element, { avgRating: this.average(element.scrapeResults.map(x => x.rating)) });
                //});
            });
    }

    ngOnInit() {
        console.log('hello `Home` component');
    }

    //average() {
    //    return function (array) {
    //        if (!_.isArray(array) || array.length === 0) {
    //            return;
    //        }

    //        var sum = 0;
    //        _.forEach(array, function (value) {
    //            if (!_.isNumber(value)) {
    //                return;
    //            }
    //            sum += value;
    //        });

    //        return sum / array.length;
    //    };
    //}

}

export class Review {
    constructor(public name: string, public rating: string) {
    }
}