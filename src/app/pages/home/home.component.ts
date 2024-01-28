import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formulario = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    email: [null, [Validators.required, Validators.email]]
  });

  errosArr = [
    { erro: 'required', mensagem: 'Campo Obrigatório' },
    { erro: 'maxlength', mensagem: 'Tamanho Máximo Excedido' },
    { erro: 'minlength', mensagem: 'Muito Curto' },
    { erro: 'email', mensagem: 'Email Inválido' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }
}
