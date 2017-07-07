import * as React from 'react'
import { Todo } from '../../types'
import { CreateTodo } from '../../actions'
import './TodoForm.scss'
const uuid = require('uuid/v4')

export interface IDispatchProps {
	onCreate: (todo: Todo) => CreateTodo;
}

const initialState = {
	title: '',
	description: ''
}

export default class TodoForm extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
		this.state = initialState;
	}

	public handleTitleChange(event: any) {
		this.setState({ ...this.state, title: event.target.value });
	}

	public handleDescriptionChange(event: any) {
		this.setState({ ...this.state, description: event.target.value });
	}

	public submit(event: any) {
		const uid = uuid();
		this.props.onCreate({ ...this.state, id: uid, finished: false });
		this.clearForm();
		event.preventDefault();
	}

	public clearForm() {
		this.setState(initialState)
	}

	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
				<textarea value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></textarea>
				<button className="c-button">Create</button>
			</form>
		)
	}
}
