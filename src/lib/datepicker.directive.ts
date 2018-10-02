import { Directive, HostListener, Input, ElementRef, ViewContainerRef, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SuPluginsDatepickerService } from "./datepicker.service";

@Directive({
    selector: '[suDatePicker]',
    providers: [NgModel]
})
export class SuDatePickerDirective implements OnInit {

    datePickerActions: any;
    @Input('format') format: string;
    @Input('dateVal') dateVal: any;
    @Output('onDateSelection') onDateSelection = new EventEmitter();
    constructor(private eRef: ElementRef,
        public viewContainerRef: ViewContainerRef,
        private ngModel: NgModel,
        public suDateService: SuPluginsDatepickerService) {
    }

    ngOnInit(): any {
    }

    @HostListener('click', ['$event']) onInputClick(event) {
        const elem: any = document.querySelector('suplugin-datepicker');
        this.positionDatePicker(this.eRef.nativeElement, elem);
        this.datePickerActions = this.suDateService.subscribeDatePickerActions().subscribe((date) => {
            this.ngModel.update.emit(this.suDateService.getDateFormatted(date, this.format));
            this.onDateSelection.emit(this.suDateService.getDateFormatted(date, this.format));
        });
        event.stopPropagation();
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (event.target.className.indexOf('date-navigation') >= 0) return;
        const elem: any = document.querySelector('suplugin-datepicker');
        elem.style.display = 'none';
        if (this.datePickerActions !== undefined && typeof this.datePickerActions.unsubscribe === 'function') {
            this.datePickerActions.unsubscribe();
        }
    }

    positionDatePicker(element, datepicker) {
        if (element !== undefined) {
            var rect = element.getBoundingClientRect();
            var elementLeft, elementTop; //x and y
            var scrollTop = document.documentElement.scrollTop ?
                document.documentElement.scrollTop : document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft ?
                document.documentElement.scrollLeft : document.body.scrollLeft;
            elementTop = rect.top + scrollTop;
            elementLeft = rect.left + scrollLeft;
            elementTop = (elementTop + 30);
            elementLeft = elementLeft;
            datepicker.style.top = elementTop + 'px';
            datepicker.style.left = elementLeft + 'px';
        }
        datepicker.style.display = 'block';
    }

}