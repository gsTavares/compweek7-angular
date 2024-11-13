import { createReducer, on } from "@ngrx/store";
import { estadoInicial } from "./app.state";
import { ListaNotificacaoActions } from "./app.actions";
import { Notificacao } from "../models/notification.model";
import { v4 as uuidv4 } from 'uuid';

const listaNotificacaoReducer = createReducer(
    estadoInicial,
    on(ListaNotificacaoActions.cadastrarNotificacao, (state, { dados } ) => {
        const novaNotificacao: Notificacao = {
            ...dados,
            id: uuidv4(),
            lida: false
        }
        return {
            ...state,
            listaNotificacao: [...state.listaNotificacao, novaNotificacao]
        }
    })
)

export {
    listaNotificacaoReducer
}