import {Component, OnInit} from 'angular2/core';
import {DataService} from './data.service';

@Component({
	template: `<h2>list content</h2>
	<ul>
      <li *ngFor="#item of items">{{item.name}}</li>
    </ul>`
})
export class ListComponent implements OnInit {

	public items:Array<any>;

	constructor(dataService: DataService) {
		this.items = dataService.getItems();
	}

	ngOnInit() {
		console.log("paso por list > ngInit");
	}
}
