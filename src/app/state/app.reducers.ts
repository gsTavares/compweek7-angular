import { createReducer, on } from "@ngrx/store";
import { estadoInicial } from "./app.state";
import { ListaNotificacaoActions, QuantidadeNotificacaoActions } from "./app.actions";
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
    }),
    on(ListaNotificacaoActions.marcarComoLida, (state, { dados }) => {
        const listaNotificacoesCopia = [...state.listaNotificacao];
        const indexNotificacaoQueSeraModificada = listaNotificacoesCopia.findIndex((notificacao) => notificacao.id === dados.idNotificacao);
        const notificacaoModificada: Notificacao = {
            ...listaNotificacoesCopia[indexNotificacaoQueSeraModificada],
            lida: true
        };

        listaNotificacoesCopia.splice(indexNotificacaoQueSeraModificada, 1, notificacaoModificada);

        return {
            ...state,
            listaNotificacao: listaNotificacoesCopia
        }
    })
);

const quantidadeNotificacaoReducer = createReducer(
    estadoInicial,
    on(QuantidadeNotificacaoActions.incrementar, (state) => {
        return {
            ...state,
            quantidadeNotificacao: state.quantidadeNotificacao + 1
        }
    })
)

export {
    listaNotificacaoReducer,
    quantidadeNotificacaoReducer
}