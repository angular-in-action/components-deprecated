// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

// NOTE: Brought over from the old app but not in use. 

@Component({
  moduleId: module.id,
  selector: 'app-stock-list',
  styleUrls: ['stock-list.component.css'],
  template: `
    <ul class="stock-list">
      <li *ngFor="let stock of stocks" (click)="showStock.next(stock)"> 
        <strong>{{stock.symbol}} ({{stock.ask | currency:'USD':true}}):</strong> {{stock.name}}
      </li>
    </ul>
  `
})
export class StockListComponent implements OnInit {

  @Input() public stocks: Array<string>;
  @Output() public showStock: EventEmitter<Object> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
