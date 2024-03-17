import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  static readonly maskSpecial: Record<string, RegExp> = {
    '9': /\d/, // Dígito
    'A': /[a-zA-Z]/, // Caractere alfabético
    '*': /\w/ // Caractere alfanumérico
  };

  static applyMask(mask: string, text: string): string {
    let formattedText = '';

    for (let maskIndex = 0, textIndex = 0; maskIndex < mask.length && textIndex < text.length; maskIndex++, textIndex++) {
      const maskChar = mask.charAt(maskIndex);
      const textChar = text.charAt(textIndex);

      if (this.maskSpecial[maskChar]?.test(textChar) || maskChar === textChar) {
        formattedText += textChar;
      } else {
        if (this.maskSpecial[maskChar]) {
          break;
        }
        formattedText += maskChar;
        textIndex--; // Mantém a posição do texto para repetir o caractere na próxima iteração
      }
    }

    return formattedText;
  }

  static removeMask(mask: string, text: string): string {
    let unformattedText = '';

    for (let i = 0; i < text.length; i++) {
      if (this.maskSpecial[mask.charAt(i)]) {
        unformattedText += text.charAt(i);
      }
    }

    return unformattedText;
  }

  static matches(mask: string, text: string, unmasked: boolean): boolean {
    if ((!unmasked && mask.length != text.length) || text.length > mask.length) {
      return false;
    }

    for (let maskIndex = 0, textIndex = 0; maskIndex < mask.length; maskIndex++, textIndex++) {
      const maskChar = mask.charAt(maskIndex);
      const textChar = text.charAt(textIndex);

      if (unmasked && !this.maskSpecial[maskChar]) {
        textIndex--;
      } else if ((!unmasked && !this.maskSpecial[maskChar] && maskChar !== textChar)
          || (this.maskSpecial[maskChar] && !this.maskSpecial[maskChar]?.test(textChar))) {
        return false;
      }
    }

    return true;
  }

}
