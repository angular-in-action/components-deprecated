/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ArticleService } from './article-service.service';

describe('ArticleService Service', () => {
  beforeEachProviders(() => [ArticleService]);

  it('should ...',
      inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
