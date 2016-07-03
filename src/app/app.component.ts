// import { Component } from '@angular/core';
import {Component, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http';
import {StockNavComponent} from './components/stock-nav/stock-nav.component';
import {AddStockComponent} from './components/add-stock/add-stock.component';
import {TotalStockComponent} from './components/total-stock/total-stock.component';
import {ListStocksComponent} from './components/list-stocks/list-stocks.component';
import {NewsStocksComponent} from './components/news-stocks/news-stocks.component';
import {StocksService} from './services/stocks.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HTTP_PROVIDERS, StocksService],
  directives: [StockNavComponent,AddStockComponent,TotalStockComponent,ListStocksComponent,NewsStocksComponent]
})
export class AppComponent {

  public stocksData: Array<Object> = [];
  public showArticlesFor: string = '';
  @ViewChild(ListStocksComponent)
  private _listStocks: ListStocksComponent

  constructor(){}

  // TODO: Add something here to get the children of the ListStocks component so
  // we can get the total of the stocks owned. 
  // Not sure, but might need to turn the individual lines of output stock into 
  //   components of their own so we can get them. 
  // 5/3/16: Can read down into ListStocks.stocksData and set it here so we 
  //  get the numbers when it changes. 
  ngAfterViewInit() {
    setTimeout( () => {
      // NOTE: console.log("this._listStocks empty to begin", this._listStocks.stocksData)
      this.stocksData = this._listStocks.stocksData
    },0)
  }

  setShowArticlesFor(evt) {
    this.showArticlesFor = evt;
  }

  // TODO: Look at this again as I think it caused problems -- see what problems it caused
  //  and figured out when you would/wouldn't use it. 
  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked")
    // setTimeout(() => {
    //   this.stocksData = this._listStocks.getTotal()
    //   console.log("this._listStocks", this.stocksData)
    // }, 0)
    // console.log("afterViewChecked");
    // console.log("this._listStocks after check", this._listStocks)
    // setTimeout( () => {
    //   this.stocksData = this._listStocks.stocksData
    // },0)
  }



}
