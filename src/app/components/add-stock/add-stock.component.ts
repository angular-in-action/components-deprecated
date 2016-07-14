import { Component, OnInit, EventEmitter } from '@angular/core';
import {StocksService} from '../../services/stocks.service';
import {Stock} from '../../models/Stock';

@Component({
  moduleId: module.id,
  selector: 'AddStock',
  templateUrl: 'add-stock.component.html',
  styleUrls: ['add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  public stockList: Array<Object>;
  public stock: Stock;

  constructor(public stocksService:StocksService) { 
    this.stock = new Stock();
  };

  ngOnInit() {}

  addStock() {
    this.stocksService.addStock(this.stock);
    this.stock = new Stock();
  }

}
