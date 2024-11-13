import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Notificacao } from '../models/notification.model';
import { ListaNotificacaoActions } from '../state/app.actions';
import { quantidadeNotificacaoSelector } from '../state/app.selectors';

@Component({
  selector: 'app-cadastro-notificacao',
  templateUrl: './cadastro-notificacao.component.html',
  styleUrl: './cadastro-notificacao.component.scss'
})
export class CadastroNotificacaoComponent implements OnInit {

  tituloFormControl: FormControl = new FormControl('', Validators.required);
  descricaoFormControl: FormControl = new FormControl('', Validators.required);

  quantidadeNotificacaoSelector = this.store.select(quantidadeNotificacaoSelector);
  quantidade: number = 0;

  constructor(private store: Store) {

  }
  
  ngOnInit(): void {
    this.quantidadeNotificacaoSelector.subscribe({
      next: (quantidadeState) => {
        this.quantidade = quantidadeState
      }
    })
  }

  cadastrar() {
    const notificacao: Notificacao = {
      titulo: this.tituloFormControl.value,
      descricao: this.descricaoFormControl.value,
      lida: false
    }

    this.store.dispatch(ListaNotificacaoActions.cadastrarNotificacao({
      dados: notificacao
    }));
  }

}
