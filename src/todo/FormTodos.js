import React from "react";
import style from './Todos.css'
import TextField from "material-ui/TextField";

export default class AddTodoToList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        this.props.listeners(this.state.value);
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={(event) => {
                this.handleFormSubmit(event);
            }}>
                <TextField label="Add a todo" margin="normal" className={style.editor} value={this.state.value}
                           onChange={(event) => {
                               this.handleChange(event)
                           }}/>
            </form>
        )
    }
}