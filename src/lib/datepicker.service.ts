import { Injectable } from '@angular/core';
import * as _moment from 'moment';
import { Subject } from 'rxjs';
const moment = _moment;

@Injectable({
    providedIn: 'root'
  })
export class SuPluginsDatepickerService {

    datePickerActions = new Subject<Object>();
    triggerDatePickerActions(data: any) {
        this.datePickerActions.next(data);
    }

    subscribeDatePickerActions(): any {
        return this.datePickerActions.asObservable();
    }
    
    months = [
        {value: 1, label: 'Jan'},
        {value: 2, label: 'Feb'},
        {value: 3, label: 'Mar'},
        {value: 4, label: 'Apr'},
        {value: 5, label: 'May'},
        {value: 6, label: 'Jun'},
        {value: 7, label: 'Jul'},
        {value: 8, label: 'Aug'},
        {value: 9, label: 'Sep'},
        {value: 10, label: 'Oct'},
        {value: 11, label: 'Nov'},
        {value: 12, label: 'Dec'},
    ];
    constructor() {
    }

    generateMonthDate(month, year) {
        if(month < 10) {
            month = '0'+month;
        }
        let day: any = Number(moment(year + '-' +  month + '-01T00:00:00').format('d'));
        if(day === 'Invalid date') {
           throw "Looks like something went wrong with day Generation" + arguments[0] + arguments[1];
        }
        return day;
    }

    getMonths() {
        return this.months;
    }

    dateComposer(startDay, lastDay) {
        let composed = [];
        let dayCounter = 0;
        let counter = 0;
        let dayPointer = 0;
        let weekObj = {'week': []};
        while(dayCounter <= lastDay || dayPointer <= 6) {

            counter++;

            if(dayPointer > 6) {
                dayPointer = 0;
            }
            if(startDay === dayPointer || dayCounter > 0) {
                dayCounter++;
            }
            weekObj['week'].push({
                day: (dayCounter <= lastDay && dayCounter > 0) ? dayCounter : '' 
            });

            dayPointer++;

            if(dayPointer > 6) {
                composed.push(weekObj);
                weekObj = {'week': []};
            }      
            
            if(counter > 50) {
                throw "While Loop exceeding the allowed limit !!!!" + arguments[0] + arguments[1];
            } 
        }
        return composed;
    }

    getMonthDates(month: number, year: number) {
        let totalDays = 0;
        month = Number(month);
        year = Number(year);
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                totalDays = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                totalDays = 30;
                break;
            case 2:
                totalDays = (year % 4 == 0) ? 29 : 28;
                break;
            default:
                totalDays = 0;
                break;
        }
        return totalDays
    }

    getYear() {
        let y = new Date();
        return y.getFullYear();
    }

    getYears() {
        let years = [];
        for(var i = 1950; i <= 2080; i++) {
            years.push(Number(i));
        }
        return years;
    }

    getDateFormatted(date: any, format: any) {
        return moment(date).format(format);
    }

    getMonth() {
        let y = new Date();
        return y.getMonth();
    }

}