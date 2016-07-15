import {Component, Input, OnChanges, SimpleChange} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'TotalStock',
  templateUrl: 'total-stock.component.html',
  styleUrls: ['total-stock.component.css']
  // inputs: ['stocksData']
})
export class TotalStockComponent implements OnChanges {

  @Input() public stocksData: Array<any>;
  private prevLength: number = 0;
  public totalShares: number = 0; 
  public totalValue: number = 0;

  constructor() {}

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if( changes['stocksData'] ) {
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
