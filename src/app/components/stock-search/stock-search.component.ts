// import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import {StockListComponent} from '../stock-list/stock-list.component';
import {StockFullComponent} from '../stock-full/stock-full.component';
import {StocksService} from '../../services/stocks.service';


// NOTE: I brought over the code for this but don't believe it was used in the 
//	original version of the application, was probably something in progress. 

@Component({
  moduleId: module.id,
  selector: 'app-stock-search',
  styleUrls: ['stock-search.component.css'], 
  template: `
    <section>
      <h3>Stock Price & Name Lookup:</h3>
      <form (submit)="doSearch()">
        <input [(ngModel)]="searchText"/>
      </form>
      <StockList [stocks]="stocks" (showStock)="currStock=$event"></StockList>
      <StockFull *ngIf="currStock" [stock]="currStock"></StockFull>
    </section>
  `,
  directives: [StockListComponent,StockFullComponent]  
})
export class StockSearchComponent {

  // constructor() {}

  // ngOnInit() {
  // }

  searchText: string;
  stocks: Object[];
  currStock: Object = undefined;
  
  constructor(public stockService:StocksService) {}
  
  doSearch() {
  	// 7/3/16: removed arg to get passed error
    // this.stockService.snapshot(this.searchText)
    this.stockService.snapshot()
    .subscribe(
      (data) => {this.stocks = data},
      (err) => {console.log('error!', err)}
    );
  }


}
