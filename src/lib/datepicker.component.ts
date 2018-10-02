import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { SuPluginsDatepickerService } from './datepicker.service';
import { SuPluginsDatepickerConfig } from './datepicker.config';
@Component({
  selector: 'suplugin-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuPluginsDatepickerComponent implements OnInit {
  items: any;
  dateComposer: any;
  months: any;
  month: number;
  year: any;
  years: any;

  @Output() onDateSelect:any = new EventEmitter();

  constructor(
    public datePickerService: SuPluginsDatepickerService,
    public dateConfigService: SuPluginsDatepickerConfig) {
    this.dateConfigService.setdayOrder(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
    this.items = this.dateConfigService.getdayOrder();
    this.months = this.datePickerService.getMonths();
    this.years = this.datePickerService.getYears();
    this.year = this.datePickerService.getYear();
    this.month = this.datePickerService.getMonth();
  }

  ngOnInit() {
    this.genCalendarView();
  }

  onDateSelection(day: any) {
    if(day < 10) {
      day = '0'+day;
    }
    let month: any = this.month;
    if(this.month < 10) {
      month = '0'+this.month;
    }
    const selectedDate = this.year + '-' + month + '-' + day;
    this.datePickerService.triggerDatePickerActions(selectedDate);
  }

  genCalendarView() {
    try {
      let startDay = this.datePickerService.generateMonthDate(this.month, this.year);
      let lastDay = this.datePickerService.getMonthDates(this.month, this.year);
      try {
        this.dateComposer = this.datePickerService.dateComposer(startDay, lastDay);
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  }

  gotoPrevMonth() {
    if( Number(this.month) === 1) {
        this.month = 12;
        this.year--;
    } else {
      this.month--;
    }
    this.genCalendarView();
  }

  gotoNextMonth() {
    if( Number(this.month) === 12) {
        this.month = 1;
        this.year++;
    } else {
      this.month++;
    }
    this.genCalendarView();
  }


}
