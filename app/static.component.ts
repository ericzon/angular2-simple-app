import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
	template: '<h1>template de static component: {{staticText}}</h1>'
})
export class StaticComponent {
	staticText: string;

	constructor() {
		this.staticText = 'contenido estático';
	}
}
