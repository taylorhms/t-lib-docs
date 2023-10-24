import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tTemplate]'
})
export class TTemplateDirective {

  @Input() tTemplate: string = 'default';

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

}
