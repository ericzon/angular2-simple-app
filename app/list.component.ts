import {Component, OnInit} from 'angular2/core';

@Component({
	template: '<h2>list content</h2>'
})
export class ListComponent implements OnInit {

	listContent: string;

	constructor() {
		this.listContent = 'dynamic list content';
	}

	ngOnInit() {
		console.log("paso por list > ngInit");
	}
}
