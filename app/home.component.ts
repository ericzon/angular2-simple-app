import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
	template: '<h1>Home component template: {{homeText}}</h1>'
})
export class HomeComponent {
	homeText: string;

	constructor() {
		this.homeText = 'dynamic content at home';
	}
}
