import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Notificacao } from './models/notification.model';
import { Store } from '@ngrx/store';
import { ListaNotificacaoActions } from './state/app.actions';
import { listaNotificacaoSelector } from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   

}
