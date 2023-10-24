import { Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TTemplateDirective } from '../../directives/t-template.directive';

@Component({
  selector: 't-table',
  templateUrl: './t-table.component.html',
  styleUrls: ['./t-table.component.css']
})
export class TTableComponent {

  @ContentChildren(TTemplateDirective) templates?: QueryList<TTemplateDirective>;
  @Input() itens: {}[] = [];

  getTemplate(value: string): TemplateRef<any> | null {
    return this.templates?.find((item: TTemplateDirective) => item.tTemplate == value)?.templateRef || null;
  }
}
