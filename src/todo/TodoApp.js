import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import TodosContainer2 from "./TodosContainer2";
import {theme} from "./TodoTheme";

const app = {
    title: "Todo list App"
};

export const AppContext = React.createContext(app);

export default class TodoApp extends React.Component {
    render() {
        return (
            <AppContext.Provider value={app}>
                <MuiThemeProvider theme={theme}>
                    <Header/>
                    <TodosContainer2/>
                </MuiThemeProvider>
            </AppContext.Provider>
        )
    }
}

