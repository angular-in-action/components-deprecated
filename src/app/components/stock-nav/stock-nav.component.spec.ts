/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StockNavComponent } from './stock-nav.component';

describe('Component: StockNav', () => {
  it('should create an instance', () => {
    let component = new StockNavComponent();
    expect(component).toBeTruthy();
  });
});
