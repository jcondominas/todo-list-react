import React, {Component} from 'react';
import TodoApp from "./todo/TodoAppp";
import {createStore} from "redux";
import Provider from "react-redux/src/components/Provider";
import rootReducers from './todo/redux/reducers'


const store = createStore(rootReducers);

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