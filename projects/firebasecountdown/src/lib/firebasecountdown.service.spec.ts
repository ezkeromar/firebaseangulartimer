import { TestBed } from '@angular/core/testing';

import { FirebasecountdownService } from './firebasecountdown.service';

describe('FirebasecountdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasecountdownService = TestBed.get(FirebasecountdownService);
    expect(service).toBeTruthy();
  });
});
