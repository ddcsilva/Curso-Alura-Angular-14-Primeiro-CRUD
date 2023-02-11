import { PensamentoService } from './../pensamento/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router,
    private service: PensamentoService
  ) {}

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['listarPensamento'])
    });
  }

  cancelar(): void {
    this.router.navigate(['listarPensamento'])
  }
}
