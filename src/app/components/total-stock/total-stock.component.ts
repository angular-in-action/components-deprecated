import {Component, Input, OnInit} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'TotalStock',
  templateUrl: 'total-stock.component.html',
  styleUrls: ['total-stock.component.css']
  // inputs: ['stocksData']
})
export class TotalStockComponent implements OnInit {

  @Input() public stocksData: Array<any>;
  private prevLength: number = 0;
  public totalShares: number = 0; 
  public totalValue: number = 0;

  constructor() {}

  ngOnInit() {
    this.computeTotals();
  }

  computeTotals() {
    this.totalShares = this.totalValue = 0;
    this.stocksData.forEach( (item) => { 
      this.totalShares += item.own;
      this.totalValue += item.own * item.lastTradePriceOnly;
    })
  }
}
