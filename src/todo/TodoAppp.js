import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import purple from "material-ui/es/colors/purple";
import Header from "./Header";
import TodosContainer from "./TodosContainer";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: "#11cb5f"
        }
    }
});

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
                    <TodosContainer/>
                </MuiThemeProvider>
            </AppContext.Provider>
        )
    }
}

