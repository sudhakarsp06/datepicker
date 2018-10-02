import { TestBed, inject } from '@angular/core/testing';

import { SuPluginsDatepickerService } from './datepicker.service';

describe('DatepickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuPluginsDatepickerService]
    });
  });

  it('should be created', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
    expect(service).toBeTruthy();
  }));

  it('triggerDatePickerActions', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
    service.triggerDatePickerActions({test: 'Jasmine'});
    service.subscribeDatePickerActions().subscribe((data) => {
      expect(data.test).toEqual('Jasmine');
    });
    //expect(service).toBeTruthy();
  }));

  it('generateMonthDate', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
    let t = service.generateMonthDate(-1,-1);
      expect(t).toEqual(NaN);
  }));

  it('getMonthDates', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
    let totalDays =  service.getMonthDates(4,2018);
    expect(totalDays).toEqual(30);

    totalDays =  service.getMonthDates(6,2018);
    expect(totalDays).toEqual(30);

    totalDays =  service.getMonthDates(2,2018);
    expect(totalDays).toEqual(28);

    totalDays =  service.getMonthDates(2,2016);
    expect(totalDays).toEqual(29);
  }));


  /**
   * Format of the Date
   * 'DD-YYYY-MMM'
   */
  it('getDateFormatted', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
    
    spyOn(console,'error');
    
    let formattedDate =  service.getDateFormatted('2018-09-28','DD-YYYY-MMM');
    expect(formattedDate).toEqual('28-2018-Sep');

    formattedDate =  service.getDateFormatted('2018-AA-28','DD-YYYY-MMM');
    expect(formattedDate).toEqual('Invalid date');
  }));

});
