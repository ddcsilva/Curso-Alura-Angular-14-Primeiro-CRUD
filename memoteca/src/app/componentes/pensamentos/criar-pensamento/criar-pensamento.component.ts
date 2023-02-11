import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  criarPensamento(): void {
    alert("Novo pensamento criado");
  }

  cancelar(): void {
    alert("Pensamento cancelado");
  }
}
