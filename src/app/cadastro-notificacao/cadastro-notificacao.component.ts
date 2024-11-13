import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Notificacao } from '../models/notification.model';
import { Store } from '@ngrx/store';
import { ListaNotificacaoActions } from '../state/app.actions';
import { listaNotificacaoSelector } from '../state/app.selectors';

@Component({
  selector: 'app-cadastro-notificacao',
  templateUrl: './cadastro-notificacao.component.html',
  styleUrl: './cadastro-notificacao.component.scss'
})
export class CadastroNotificacaoComponent {

  tituloFormControl: FormControl = new FormControl('', Validators.required);
  descricaoFormControl: FormControl = new FormControl('', Validators.required);

  constructor(private store: Store) {

  }
  
  ngOnInit(): void {
    
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
