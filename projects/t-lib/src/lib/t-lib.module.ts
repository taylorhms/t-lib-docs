import { NgModule } from '@angular/core';
import { TLibComponent } from './t-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { TCalendarComponent } from './components/t-calendar/t-calendar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent
  ]
})
export class TLibModule { }
