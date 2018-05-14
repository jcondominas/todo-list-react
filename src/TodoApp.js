import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/header/Header";
import TodoListContainer from "./containers/TodoListContainer";
import {theme} from "./components/todolist/TodoTheme";
import {store} from "./store/index";
import {Provider} from "react-redux";

const app = {
    title: "Todo list App"
};

export const AppContext = React.createContext(app);

export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContext.Provider value={app}>
                    <MuiThemeProvider theme={theme}>
                        <Header/>
                        <TodoListContainer/>
                    </MuiThemeProvider>
                </AppContext.Provider>
            </Provider>
        )
    }
}

