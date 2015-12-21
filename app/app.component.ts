import {Component} from 'angular2/core';
//import {RouterConfig, ROUTER_DIRECTIVES} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {ListComponent} from './list.component';
import {ItemComponent} from './item.component';
import {StaticComponent} from './static.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/tpl1.html',
	directives: [ROUTER_DIRECTIVES],
	styles: [`
		a {padding: 5px;text-decoration: none;}
		a:visited, a:link {color: #444;} a:hover {color: white; background-color: #1171a3;} a.router-link-active {color: white; background-color: #52b9e9;} '
	`]
})
@RouteConfig([
	{
		path: '/home', 
		name: 'MainView',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/list/:id', 
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
