import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class SuPluginsDatepickerConfig {

    dayOrder: any = ['S','M','T','W','T','F','S'];
    constructor() {
    }

    /**
     * Day order is configurable
     * @param order - We can supply in our own order in here
     */
    setdayOrder(order) {
        this.dayOrder = order;
    }

    /**
     * Calendar picker can get the day Order from here
     */
    getdayOrder() {
        return this.dayOrder;
    }
}