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
  selector: 'AppRoot',
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

  ngAfterViewInit() {
    setTimeout( () => {
      this.stocksData = this._listStocks.stocksData
    },0)
  }

  setShowArticlesFor(evt) {
    this.showArticlesFor = evt;
  }

}
