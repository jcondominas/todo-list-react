import React from "react";
import Button from 'material-ui/Button'
import MuiThemeProvider from "material-ui/es/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/es/styles/createMuiTheme";
import purple from "material-ui/es/colors/purple";

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

export default class TodoApp extends React.Component {


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Button variant='raised' color="primary">
                        Hello World
                    </Button>
                    <Button variant='raised' color="secondary">
                        Hello World
                    </Button>
                </div>
            </MuiThemeProvider>
        )
    }
}