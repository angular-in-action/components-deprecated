/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';

describe('Component: StockList', () => {
  it('should create an instance', () => {
    let component = new StockListComponent();
    expect(component).toBeTruthy();
  });
});
