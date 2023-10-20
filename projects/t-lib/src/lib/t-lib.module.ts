import { NgModule } from '@angular/core';
import { TLibComponent } from './t-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { TCalendarComponent } from './components/t-calendar/t-calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent
  ]
})
export class TLibModule { }
