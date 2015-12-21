import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

// http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
// https://angular.io/docs/ts/latest/guide/router.html

@Injectable()
export class DataService {
  items:Array<any>;

  constructor() {
    this.items = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ];
  }

  getItems() {
    return this.items;
  }
}
