// import { Component, OnInit, Input } from '@angular/core';

import {Component, EventEmitter, Input, OnChanges, SimpleChange} from '@angular/core';
import {ArticleService} from '../../services/article-service.service';

@Component({
  moduleId: module.id,
  selector: 'NewsStocks',
  templateUrl: 'news-stocks.component.html',
  styleUrls: ['news-stocks.component.css'],
  providers: [ArticleService]
})
export class NewsStocksComponent {


  @Input() public showArticlesFor: string = '';
  public articles: Array<any>;

  constructor(public articleService:ArticleService) { };

  // ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
  ngOnChanges(changes) {
    if ( changes.showArticlesFor && changes.showArticlesFor.currentValue !== '') {
      var currSymbol = changes.showArticlesFor;
      if (currSymbol.previousValue !== currSymbol.currentValue) {
        this.fetchArticles(currSymbol.currentValue);
      }
    }
  }

  //TODO: Bring over the call to the service to get the ListStocks
  private fetchArticles(symbol) {
    this.articleService.fetch(symbol)
      .subscribe(
      (data) => {
        if (data.status === 'ERROR') {
          this.articles = undefined;
        } else {
          this.articles = data  
        }
      },
      (err) => {
        console.log('error in articlesService', err);
      }
      )
  }  



}
