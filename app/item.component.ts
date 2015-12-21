import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	template: '<h2>Item content</h2><br />{{itemContent}}'
})
export class ItemComponent implements OnInit {

	itemContent: string;

	constructor(private _routeParams: RouteParams) {
		
		this.itemContent = 'dynamic item content';
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		console.log("ItemComponent > ngOnInit", id);
	}
}
