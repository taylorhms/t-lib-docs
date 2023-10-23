import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TLibComponent } from './t-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { TCalendarComponent } from './components/t-calendar/t-calendar.component';
import { TFieldErrorComponent } from './components/t-field-error/t-field-error.component';



@NgModule({
  declarations: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent,
    TFieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent,
    TFieldErrorComponent
  ]
})
export class TLibModule { }
