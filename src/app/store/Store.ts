import { Store, applyMiddleware, createStore, combineReducers } from "redux";

import { History } from "history";
import { AppStore, ShellStore } from "@app/store";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export interface IRootStore {
    shellStore: ShellStore.IState;
}

export function configureStore(history: History): Store<AppStore.IState> {
    const composeEnhancers = composeWithDevTools({});

    const rootReducer = combineReducers<IRootStore>({
        shellStore: ShellStore.reducer
    });

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );

    return store;
}
