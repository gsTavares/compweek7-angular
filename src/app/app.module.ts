import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { listaNotificacaoReducer, quantidadeNotificacaoReducer } from './state/app.reducers';
import { ListaNotificacaoComponent } from './lista-notificacao/lista-notificacao.component';
import { CadastroNotificacaoComponent } from './cadastro-notificacao/cadastro-notificacao.component';
import { AppEffects } from './state/app.effects';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    ListaNotificacaoComponent,
    CadastroNotificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      listaNotificacao: listaNotificacaoReducer,
      quantidadeNotificacao: quantidadeNotificacaoReducer
    }, {}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
