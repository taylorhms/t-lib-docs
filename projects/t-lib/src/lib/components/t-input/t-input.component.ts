import { Component, Input } from '@angular/core';

@Component({
  selector: 't-input',
  templateUrl: './t-input.component.html',
  styleUrls: ['./t-input.component.css']
})
export class TInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Digite...';
}
