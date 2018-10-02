import { TestBed, inject } from '@angular/core/testing';

import { SuPluginsDatepickerConfig } from './datepicker.config';

describe('DatepickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuPluginsDatepickerConfig]
    });
  });

  it('should be created', inject([SuPluginsDatepickerConfig], (service: SuPluginsDatepickerConfig) => {
    expect(service).toBeTruthy();
  }));
});
