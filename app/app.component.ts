import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {ListComponent} from './list.component';
import {ItemComponent} from './item.component';
import {StaticComponent} from './static.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['css/menu-links.css']
})
@RouteConfig([
	{
		path: '/home', 
		name: 'MainView',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/list', 
		name: 'ListView',
		component: ListComponent
	},
	{
		path: '/item/:id', 
		name: 'ItemView',
		component: ItemComponent
	},
	{
		path: '/static', 
		name: 'StaticView',
		component: StaticComponent
	}
])
export class AppComponent {
	public title = 'Main title';
	public field1: boolean = false;
	public method1(): void {
		console.log("TEST method1 executed!");
	}
}
