import { NgModule } from '@angular/core';
import { SuPluginsDatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuDatePickerDirective } from './datepicker.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SuPluginsDatepickerComponent, SuDatePickerDirective],
  exports: [SuPluginsDatepickerComponent, SuDatePickerDirective],
  entryComponents: [SuPluginsDatepickerComponent]
})
export class DatepickerModule { }
