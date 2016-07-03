/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewsStocksComponent } from './news-stocks.component';

describe('Component: NewsStocks', () => {
  it('should create an instance', () => {
    let component = new NewsStocksComponent();
    expect(component).toBeTruthy();
  });
});
