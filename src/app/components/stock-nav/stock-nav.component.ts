import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'StockNav',
  template: `
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
               <span class="sr-only">Toggle navigation</span>
               <span class="glyphicon glyphicon-minus"></span>
            </button>
          <a class="navbar-brand" href="#">Brand (included)</a>
          </div>
        </nav>
      </div>
    </div>`, 
  styles: ['div {background: yellow;}', '.navbar-brand {font-size: 20px;}']    
})
export class StockNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
