import React from "react";
import Appbar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import {AppContext} from './TodoApp'

const Header = () => {
    return (
        <AppContext.Consumer>
            {app => (
                <Appbar position="static">
                    <Toolbar>
                        <Typography variant="title">
                            {app.title}
                        </Typography>
                    </Toolbar>
                </Appbar>
            )}
        </AppContext.Consumer>
    )
};

export default Header;