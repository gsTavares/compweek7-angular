import { Component } from '@angular/core';
import { listaNotificacaoSelector } from '../state/app.selectors';
import { Notificacao } from '../models/notification.model';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-notificacoes-lidas',
  templateUrl: './notificacoes-lidas.component.html',
  styleUrl: './notificacoes-lidas.component.scss'
})
export class NotificacoesLidasComponent {

  notificacoesSelector = this.store.select(listaNotificacaoSelector);
  listaNotificacoes: Notificacao[] = [];

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.notificacoesSelector.pipe(map(listaDoEstadoMisturada => {
      return listaDoEstadoMisturada.filter(notificacao => notificacao.lida)
    })).subscribe({
      next: (listaDoEstadoTransformada) => {
        // for(let elemento of listaDoEstado) {
        //   if(elemento.lida) {
        //     this.listaNotificacoes.push(elemento);
        //   }
        // }

        // this.listaNotificacoes = listaDoEstado.filter(notificacao => notificacao.lida);
        this.listaNotificacoes = listaDoEstadoTransformada

        console.log(this.listaNotificacoes);
      }
    })
  }

}
