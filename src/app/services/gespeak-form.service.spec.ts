import { TestBed } from '@angular/core/testing';

import { GespeakFormService } from './gespeak-form.service';

describe('GespeakFormService', () => {
  let service: GespeakFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GespeakFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
