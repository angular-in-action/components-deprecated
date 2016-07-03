/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockFullComponent } from './stock-full.component';

describe('Component: StockFull', () => {
  it('should create an instance', () => {
    let component = new StockFullComponent();
    expect(component).toBeTruthy();
  });
});
