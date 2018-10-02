import { Injectable } from '@angular/core';
@Injectable()
export class SuPluginsDatepickerHelper {
    
    constructor() {

    }

    getFirstDayByDate(date) {
        return new Date(date).getDay();
    }

    getLastDayByDate(date) {

    }
}