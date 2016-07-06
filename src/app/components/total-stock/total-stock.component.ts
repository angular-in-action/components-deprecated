// import { Component, OnInit } from '@angular/core';
import {Component, Input, DoCheck} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'TotalStock',
  templateUrl: 'total-stock.component.html',
  styleUrls: ['total-stock.component.css']
  // inputs: ['stocksData']
})
export class TotalStockComponent implements DoCheck {

  @Input() public stocksData: Array<any>;
  private prevLength: number = 0;
  public totalShares: number = 0; 
  public totalValue: number = 0;

  constructor() {}

  // Can catch the changes with specific coding to find it
  ngDoCheck() {
    if (this.stocksData.length && this.stocksData.length !== this.prevLength) {
      this.computeTotals()
    }
  }

  computeTotals() {
    this.totalShares = this.totalValue = 0;
    this.stocksData.forEach( (item) => { 
      this.totalShares += item.own;
      this.totalValue += item.own * item.lastTradePriceOnly;
    })
  }
}
