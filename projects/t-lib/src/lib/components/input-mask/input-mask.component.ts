import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { MaskService } from '../../services/mask.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 't-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputMaskComponent)
    }
  ]
})
export class InputMaskComponent implements ControlValueAccessor {

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;
  @Input() mascara: string = '';
  @Input() unmask: boolean = false;
  @Input() disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  formatar(valor?: string) {
    if (this.input) {
      this.input.nativeElement.value = MaskService.applyMask(this.mascara, valor ?? this.input.nativeElement.value);
      this.onChangeValue();
    }
  }

  onChangeValue() {
    let value = this.input?.nativeElement.value ?? '';

    if (this.unmask) {
      value = MaskService.removeMask(this.mascara, value);
    }

    this.onChange(value);
  }

  // CtrlValueAcessor

  writeValue(value: string): void {
    this.formatar(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
