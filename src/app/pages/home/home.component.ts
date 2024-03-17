import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'projects/t-lib/src/lib/services/validator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formulario = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    email: [null, [Validators.required, Validators.email]],
    telefone: [null, [Validators.required, this.validatorService.mask('999.999.999-99', false)]]
  });

  errosArr = [
    { erro: 'required', mensagem: 'Campo Obrigatório' },
    { erro: 'maxlength', mensagem: 'Tamanho Máximo Excedido' },
    { erro: 'minlength', mensagem: 'Muito Curto' },
    { erro: 'email', mensagem: 'Email Inválido' },
    { erro: 'mask', mensagem: 'Valor Inválido' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) { }
}
