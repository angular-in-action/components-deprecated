/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockSearchComponent } from './stock-search.component';

describe('Component: StockSearch', () => {
  it('should create an instance', () => {
    let component = new StockSearchComponent();
    expect(component).toBeTruthy();
  });
});
