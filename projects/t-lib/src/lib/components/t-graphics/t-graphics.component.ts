import { Component, Input } from '@angular/core';

@Component({
  selector: 't-graphics',
  templateUrl: './t-graphics.component.html',
  styleUrls: ['./t-graphics.component.css']
})
export class TGraphicsComponent {

  /**
   * Largura do gráfico. Qualquer valor css.
   * Exemplo: '300px', '50%', '100vw'.
   * @default '100%'
   */
  @Input() width: string = '100%';
  /**
   * Altura do gráfico. Qualquer valor css.
   * Exemplo: '300px', '50%', '100vh'.
   * @default '300px'
   */
  @Input() height: string = '300px';

  @Input() dados: any[] = [];

  calcPosicaoXBarra(indice: number) {
    let widthEixoX = 700; // 70% do total
    let distancia = widthEixoX / (this.dados.length + 1);
    let inicioX = 150 + distancia;
    
    return inicioX + distancia * indice;
  }

  calcAlturaBarra(dado: any) {
    let heightEixoX = 350; // 70% do total
    let max = this.dados.reduce((a, b) => (a > b) ? a : b);

    return heightEixoX * dado / max;
  }
}
