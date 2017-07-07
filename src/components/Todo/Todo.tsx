import * as React from 'react';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { CreateTodo, FinishTodo } from '../../actions';
import { Todo } from '../../types'
import './Todo.css'

export interface IStateProps {
	todoList: Todo[];
}

export interface IDispatchProps {
	onCreate: (todo: Todo) => CreateTodo;
	onFinish: (id: string) => FinishTodo;
}

export default class TodoListView extends React.Component<IStateProps & IDispatchProps, any> {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="o-container o-grid">
				<div className="o-grid__col u-3/12">
					<TodoForm onCreate={this.props.onCreate} />
				</div><div className="o-grid__col u-8/12">
					{this.props.todoList.map((todo: Todo) =>
						<TodoItem todo={todo} key={todo.id} onFinish={() => this.props.onFinish(todo.id)} />
					)}
				</div>
				Tasks left: {this.props.todoList.filter(todo => !todo.finished).length}
			</div>
		)
	}
}

