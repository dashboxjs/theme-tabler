import { TestBed } from '@angular/core/testing';

import { ThemeTablerService } from './theme-tabler.service';

describe('ThemeTablerService', () => {
  let service: ThemeTablerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeTablerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
