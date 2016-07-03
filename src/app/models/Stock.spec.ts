/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Stock} from './Stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('IBM', 3)).toBeTruthy();
  });
});
