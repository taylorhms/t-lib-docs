import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TLibComponent } from './t-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { TCalendarComponent } from './components/t-calendar/t-calendar.component';
import { TFieldErrorComponent } from './components/t-field-error/t-field-error.component';
import { TTemplateDirective } from './directives/t-template.directive';
import { TTableComponent } from './components/t-table/t-table.component';



@NgModule({
  declarations: [
    TLibComponent,
    TInputComponent,
    TCalendarComponent,
    TFieldErrorComponent,
    TTemplateDirective,
    TTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TTemplateDirective,
    TLibComponent,
    TInputComponent,
    TCalendarComponent,
    TFieldErrorComponent,
    TTableComponent
  ]
})
export class TLibModule { }
