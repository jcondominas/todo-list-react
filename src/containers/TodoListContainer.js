import {connect} from 'react-redux'
import {addTodo, removeTodo} from '../store/todolist/actions'
import Todos from "../components/todolist/Todos";

const mapStateToProps = (state) => {
    return {
        todos: state.listTodos.todos,
        completedTodos: state.listTodos.completedTodos
    }
};

const mapDispatchToProps = dispatch => ({
    onTodoClicked: id => dispatch(removeTodo(id)),
    onTodoAdded: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps,
    mapDispatchToProps)(Todos)
