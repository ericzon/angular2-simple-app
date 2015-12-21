import {Component} from 'angular2/core';

@Component({
	template: '<h2>item content</h2>'
})
export class ItemComponent{

	itemContent: string;

	constructor() {
		this.itemContent = 'dynamic item content';
	}
}
