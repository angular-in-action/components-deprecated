/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StocksService } from './stocks.service';

describe('StocksService Service', () => {
  beforeEachProviders(() => [StocksService]);

  it('should ...',
      inject([StocksService], (service: StocksService) => {
    expect(service).toBeTruthy();
  }));
});
