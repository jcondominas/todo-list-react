import React, {Component} from 'react';
import TodoApp from "./todo/TodoApp";
import {createStore} from "redux";
import rootReducers from './todo/redux/reducers/reducers'
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";

const store = createStore(rootReducers,
    composeWithDevTools()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp/>
            </Provider>
        );
    }
}

export default App;