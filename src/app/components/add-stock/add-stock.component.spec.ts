/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {StocksService} from '../../services/stocks.service';
import {Stock} from '../../models/Stock';


import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddStockComponent } from './add-stock.component';

// describe('Component: AddStock', () => {
//   it('should create an instance', () => {
//     let component = new AddStockComponent();
//     expect(component).toBeTruthy();
//   });
// });
