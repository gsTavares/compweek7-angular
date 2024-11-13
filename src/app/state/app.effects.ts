import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ListaNotificacaoActions, QuantidadeNotificacaoActions } from "./app.actions";
import { of, switchMap } from "rxjs";

@Injectable()
class AppEffects {

    constructor(private actions: Actions) {

    }

    incrementarContador = createEffect(() => this.actions.pipe(
        ofType(ListaNotificacaoActions.cadastrarNotificacao),
        switchMap(() => of(QuantidadeNotificacaoActions.incrementar()))
    ));

}

export {
    AppEffects
}