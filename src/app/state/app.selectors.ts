import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

const listaNotificacaoFeatureSelector = createFeatureSelector<AppState>('listaNotificacao');
const quantidadeNotificacaoFeatureSelector = createFeatureSelector<AppState>('quantidadeNotificacao');

const listaNotificacaoSelector = createSelector(
    listaNotificacaoFeatureSelector,
    (state) => state.listaNotificacao
);

const quantidadeNotificacaoSelector = createSelector(
    quantidadeNotificacaoFeatureSelector,
    (state) => state.quantidadeNotificacao
);

export {
    listaNotificacaoSelector,
    quantidadeNotificacaoSelector
};
