import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';


@Injectable()
export class ArticleService {

  constructor(public http:Http) {}

  fetch(symbol:string):any {
    let params = new URLSearchParams();
    params.set('symbol', symbol);

    return this.http.get('http://localhost:8080/api/fetchArticles', {search: params})
      .map(res => res.json()) // convert to JSON
  }
}

