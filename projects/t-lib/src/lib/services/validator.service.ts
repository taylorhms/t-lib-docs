import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MaskService } from './mask.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  mask(mask: string, unmasked: boolean = false): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || !MaskService.matches(mask, control.value, unmasked)) {
        return { mask: true };
      }
      return null;
    };
  }
}
