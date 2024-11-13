import { Notificacao } from "../models/notification.model"

type AppState = {
    listaNotificacao: Notificacao[],
    quantidadeNotificacao: number
}

const estadoInicial: AppState = {
    listaNotificacao: [],
    quantidadeNotificacao: 0
}

export {
    AppState,
    estadoInicial
}