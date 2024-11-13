import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { listaNotificacaoSelector } from '../state/app.selectors';
import { Notificacao } from '../models/notification.model';

@Component({
  selector: 'app-lista-notificacao',
  templateUrl: './lista-notificacao.component.html',
  styleUrl: './lista-notificacao.component.scss'
})
export class ListaNotificacaoComponent implements OnInit {

  notificacoesSelector = this.store.select(listaNotificacaoSelector);
  listaNotificacoes: Notificacao[] = [];

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.notificacoesSelector.subscribe({
      next: (listaDoEstado) => {
        this.listaNotificacoes = listaDoEstado
        console.log(this.listaNotificacoes);
      }
    })
  }


  notificacaoFoiLida(notificacao: Notificacao) {
    if (notificacao.lida) {
      return 'Sim'
    } else {
      return 'Não'
    }
  }

}
