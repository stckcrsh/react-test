import TodoListView, { IStateProps, IDispatchProps } from '../components/Todo/Todo'
import * as actions from '../actions'
import { TodoState } from '../types'
import { Todo } from '../types'
import { connect, Dispatch } from 'react-redux'

export function mapStateToProps(todoState: TodoState): IStateProps {
	return {
		todoList: todoState.ids.map(id => todoState.entities[id])
	}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>): IDispatchProps {
	return {
		onCreate: (todo: Todo) => dispatch(actions.createTodo(todo)),
		onFinish: (id: string) => dispatch(actions.finishTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);