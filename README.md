# Datepicker

## Installation

To install this library, run:

```bash
$ npm install sudatepicker --save
```

## Consuming your library

###### Add the below line in app.module.ts
```javascript

  import { DatepickerModule, , SuPluginsDatepickerComponent } from 'sudatepicker/public_api';
```

###### And this import in app.module.ts

```javascript
imports: [
    BrowserModule,
    DatepickerModule, <-- here
    CommonModule,
    FormsModule
  ],
```

######  And this line to entryComponents
```javascript
entryComponents: [SuPluginsDatepickerComponent]
```
## Include it in the app.component.html
```html
<suplugin-datepicker></suplugin-datepicker>
```

## How to use it
```html
<input type="text" [dateVal]="date1" (onDateSelection)="onDateSelect($event)" [format]="'MMM-YYYY-DD'" [(ngModel)]="date1" suDatePicker />
```

## Input and Output
* @Input - dateVal
* @input - format (optional)
* @output - OnDateSelection

## LICENSE


###### It currently supports ngModel in the text input element and the support for reactiveform is pending still.


## License

MIT © [Sudhakar Pilavadi](mailto:sudhakarsp06@gmail.com)

## Keywords
Angular 6 Datepicker, Angular Datepicker, Angular 5 Datepicker
