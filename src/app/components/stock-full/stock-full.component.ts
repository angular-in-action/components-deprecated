import { Component, EventEmitter } from '@angular/core';

// NOTE: Brought over but not current being used.

@Component({
  moduleId: module.id,
  selector: 'app-stock-full',
  styleUrls: ['stock-full.component.css'],
  template: `
    <header>Full Stock Info</header>
    <div>
      <label>Name</label><div>{{stock.name}}</div>
      <label>Symbol</label><div>{{stock.symbol}}</div>
      <label>Ask</label><div>{{stock.ask}}</div>
      <label>Average Daily Volume</label><div>{{stock.averageDailyVolume}}</div>
    </div>
  `  
})
export class StockFullComponent {
  
  public stock: Object;

  constructor() {}

}
