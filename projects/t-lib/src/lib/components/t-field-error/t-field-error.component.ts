import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export type TFieldErrorMessage = {
  erro: string;
  mensagem: string;
};

@Component({
  selector: 't-field-error',
  templateUrl: './t-field-error.component.html',
  styleUrls: ['./t-field-error.component.css']
})
export class TFieldErrorComponent {

  @Input() campo: AbstractControl | null = null;
  @Input() erros: { erro: string, mensagem: string }[] = [];
  // @Input() erros: { [key: string]: string } = {};

  get mensagem(): string | null {
    if (this.campo == null || !(this.campo.invalid && this.campo.dirty)) {
      return null;
    }

    for (let erro of this.erros) {
      if (this.campo.hasError(erro.erro)) {
        return erro.mensagem;
      }
    }
    // for (let erro in this.erros) {
    //   if (this.campo.hasError(erro)) {
    //     return this.erros[erro];
    //   }
    // }

    return null;
  }
}
