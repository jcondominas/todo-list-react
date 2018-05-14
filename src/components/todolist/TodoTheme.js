import createMuiTheme from "material-ui/styles/createMuiTheme";
import purple from "material-ui/colors/purple";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: "#11cb5f"
        }
    }
});