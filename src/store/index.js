import {composeWithDevTools} from "redux-devtools-extension";
import rootReducers from "./todolist/reducers";
import {createStore} from "redux";

export const store = createStore(rootReducers,
    composeWithDevTools()
);