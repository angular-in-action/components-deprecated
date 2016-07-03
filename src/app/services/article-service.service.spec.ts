/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ArticleServiceService } from './article-service.service';

describe('ArticleService Service', () => {
  beforeEachProviders(() => [ArticleServiceService]);

  it('should ...',
      inject([ArticleServiceService], (service: ArticleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
