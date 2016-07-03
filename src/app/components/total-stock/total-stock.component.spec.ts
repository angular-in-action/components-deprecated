/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TotalStockComponent } from './total-stock.component';

describe('Component: TotalStock', () => {
  it('should create an instance', () => {
    let component = new TotalStockComponent();
    expect(component).toBeTruthy();
  });
});
