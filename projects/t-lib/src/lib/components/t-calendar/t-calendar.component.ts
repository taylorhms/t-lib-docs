import { Component, Input, OnInit } from '@angular/core';


type Dia = {
  dia: number;
  mes: number;
  ano: number;
};

@Component({
  selector: 't-calendar',
  templateUrl: './t-calendar.component.html',
  styleUrls: ['./t-calendar.component.css']
})
export class TCalendarComponent implements OnInit {

  @Input() value: string = '';
  @Input() placeholder: string = 'dd/mm/aaaa';
  @Input() monthLabel = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  @Input() diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  data: Date = new Date();
  mes: number = this.data.getMonth();
  ano: number = this.data.getFullYear();
  diaSelecionado: Dia | null = null;
  diasCalendario: Dia[] = [];

  ngOnInit(): void {
      this.montarCalendario();
  }

  prev(): void {
    this.mes -= 1;
    if (this.mes < 0) {
      this.mes = 11;
      this.ano -= 1;
    }
    this.montarCalendario();
  }

  next(): void {
    this.mes += 1;
    if (this.mes > 11) {
      this.mes = 0;
      this.ano += 1;
    }
    this.montarCalendario();
  }

  montarCalendario(): void {
    const DIAS_MILISSEG = 24 * 60 * 60 * 1000;
    let dia01 = new Date(this.ano, this.mes);
    let proxDia01 = (this.mes == 11) ? new Date(this.ano + 1, 0) : new Date(this.ano, this.mes + 1);
    let diaDaSemInicio = dia01.getDay();
    let diaDaSemFim = proxDia01.getDay();
    let inicio = dia01.getTime() - (diaDaSemInicio * DIAS_MILISSEG);
    let fim = (diaDaSemFim == 0) ? proxDia01.getTime() : proxDia01.getTime() + ((7 - diaDaSemFim) * DIAS_MILISSEG);
    
    let calendario: Dia[] = [];
    let semanaIndex = -1;
    for (let tempo = inicio; tempo < fim; tempo += DIAS_MILISSEG) {
      let data = new Date(tempo);

      calendario.push({
        dia: data.getDate(),
        mes: data.getMonth(),
        ano: data.getFullYear()
      });
    }

    this.diasCalendario = calendario;
  }

  selecionar(dia: Dia): void {
    this.diaSelecionado = dia;
  }

  dataString(): string {
    return (this.diaSelecionado == null) ? 'dd/mm/aaaa' : `${this.diaSelecionado.dia}/${this.diaSelecionado.mes + 1}/${this.diaSelecionado.ano}`;
  }
}
