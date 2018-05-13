import {connect} from 'react-redux'
import {addTodo, removeTodo} from './redux/actions'
import Todos from "./Todos";

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
