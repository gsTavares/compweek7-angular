import { createActionGroup, props } from "@ngrx/store";
import { Notificacao } from "../models/notification.model";

const ListaNotificacaoActions = createActionGroup(
    {
        source: 'listaNotificacao',
        events: {
            'Cadastrar Notificacao': props<{dados: Notificacao}>(),
            'Marcar Como Lida': props<{ dados: { idNotificacao: string } }>(),
        }
    }
)

const QuantidadeNotificacaoActions = createActionGroup(
    {
        source: 'quantidadeNotificacao',
        events: {
            'Incrementar': props<any>()
        }
    }
)

export  {
    ListaNotificacaoActions,
    QuantidadeNotificacaoActions
}