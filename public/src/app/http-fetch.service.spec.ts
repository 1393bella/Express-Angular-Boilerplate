import { TestBed } from '@angular/core/testing';

import { HttpFetchService } from './http-fetch.service';

describe('HttpFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFetchService = TestBed.get(HttpFetchService);
    expect(service).toBeTruthy();
  });
});
