// ```
// app.ts
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// app.ts may be freely distributed under the MIT license
// ```

// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppState} from './app.service';

import {RouterActive} from './shared/directives/router-active/router-active.directive';

import {Home} from './home';

// Import NgFor directive
import {NgFor} from '@angular/common';

// Import Todo component
//import {Todo} from './todo/todo.component';

// Import Recipes component
//import {Recipes} from './recipes/recipes.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [  ],
  directives: [ NgFor,
                RouterActive],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: `
    <md-content>
<md-toolbar color="primary">
        <span>Reviews</span>
        <span class="fill"></span>
    </md-toolbar>
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading">
      </md-progress-bar>
      <router-outlet></router-outlet>
      <footer>
        <span>Reviews 2016</span>
      </footer>
    </md-content>
  `
})
@RouteConfig([
  { path: '/', name: 'Index', component: Home, useAsDefault: true }
  //{ path: '/home',  name: 'Home',  component: Home },
  //{ path: '/todo', component: Todo, name: 'Todo' },
  //{ path: '/redux', component: Recipes, name: 'Recipes' },
  // Async load a component using Webpack's require with
  // es6-promise-loader and webpack `require`
  //{ path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'Reviews';
  url = '';

  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState) {}

  // Fire off upon initialization
  ngOnInit() {

    console.log('Initial App State', this.appState.state);
  }
}

/*
 * For help or questions please contact us at @datatype_void on twitter
 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
 */
