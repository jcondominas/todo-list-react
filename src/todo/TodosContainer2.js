import {connect} from 'react-redux'
import {addTodo, removeTodo} from './redux/actions'
import Todos from "./Todos";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todos.todos,
        completedTodos: state.todos.completedTodos
    }
};

const mapDispatchToProps = dispatch => ({
    onTodoClicked: id => dispatch(removeTodo(id)),
    onTodoAdded: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps,
    mapDispatchToProps)(Todos)
