import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotificacaoComponent } from './lista-notificacao/lista-notificacao.component';
import { CadastroNotificacaoComponent } from './cadastro-notificacao/cadastro-notificacao.component';
import { NotificacoesLidasComponent } from './notificacoes-lidas/notificacoes-lidas.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroNotificacaoComponent
  },
  {
    path: 'lista-notificacao',
    component: ListaNotificacaoComponent
  },
  {
    path: 'notificacoes-lidas',
    component: NotificacoesLidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
