import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SuPluginsDatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuPluginsDatepickerService } from './datepicker.service';



describe('DatepickerComponent', () => {
  let component: SuPluginsDatepickerComponent;
  let fixture: ComponentFixture<SuPluginsDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ SuPluginsDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuPluginsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(console, 'error');
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * ngONInit method testing
  */
  it('should create ngOnInit', () => {
    /**
     * set montha and year
    */
    component.month = 9;
    component.year = 2018;
    component.ngOnInit();
    expect(component.dateComposer.length).toEqual(6);
  });

  /**
   * ngONInit method testing - Exception first level
  */
  it('should create ngOnInit - Exception first level', () => {
    /**
     * set montha and year
    */
    component.month = -1;
    component.year = -1;
    component.ngOnInit();
    expect(console.error).toHaveBeenCalled();
  });

  /**
   * genCalendarView
  */
  it('genCalendarView', () => {
    /**
     * set months and year
    */
    component.month = 9;
    component.year = 2018;
    component.genCalendarView();
    expect(component.dateComposer.length).toEqual(6);
  });

    /**
   * gotoPrevMonth
  */
 it('gotoPrevMonth', () => {
  /**
   * set months and year
  */
  component.month = 10;
  component.year = 2018;
  component.gotoPrevMonth();
  expect(component.dateComposer.length).toEqual(6);
});


/**
 * gotoPrevMonth - If case
*/
 it('gotoPrevMonth - If case', () => {
  /**
   * set months and year
  */
  component.month = 1;
  component.year = 2018;
  component.gotoPrevMonth();
  expect(component.dateComposer.length).toEqual(6);
});


  /**
   * gotoNextMonth
  */
 it('gotoNextMonth', () => {
  /**
   * set months and year
  */
  component.month = 8;
  component.year = 2018;
  component.gotoNextMonth();
  expect(component.dateComposer.length).toEqual(6);
});

  /**
   * gotoNextMonth
  */
 it('gotoNextMonth - If case', () => {
  /**
   * set months and year
  */
  component.month = 12;
  component.year = 2018;
  component.gotoNextMonth();
  expect(component.dateComposer.length).toEqual(5);
});


it('onDateSelection -if', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
  spyOn(service, 'triggerDatePickerActions');

    /**
   * set months and year
  */
 component.month = 9;
 component.year = 2018;
 component.onDateSelection(9);
 expect(service.triggerDatePickerActions).toHaveBeenCalled();

}));



it('onDateSelection - else path', inject([SuPluginsDatepickerService], (service: SuPluginsDatepickerService) => {
  spyOn(service, 'triggerDatePickerActions');

    /**
   * set months and year
  */
 component.month = 10;
 component.year = 2018;
 component.onDateSelection(10);
 expect(service.triggerDatePickerActions).toHaveBeenCalled();

}));



});
