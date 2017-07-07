import * as React from 'react'
import { Todo } from '../../types'
import './TodoItem.scss';
const classnames = require('classnames');

export interface Props {
	todo: Todo;
	onFinish: () => void;
}

export default class TodoItem extends React.Component<Props, any> {

	constructor(props: Props) {
		super(props);
	}
	render() {
		const classes = classnames('o-grid__col u-3/4 todo-item__title', {
			"todo-item__title--strike": this.props.todo.finished
		});
		return (
			<div className="c-card o-grid todo-item">
				<div className="o-grid__col u-1/4">
					<div className="c-checkbox">
						<input
							type="checkbox"
							checked={this.props.todo.finished}
							id={'cb_' + this.props.todo.id}
							onClick={() => this.props.onFinish()}
						/>
						<label htmlFor={'cb_' + this.props.todo.id}></label>
					</div>
				</div>
				<label className={classes} htmlFor={'cb_' + this.props.todo.id} >{this.props.todo.title}</label>
			</div>
		)
	}
}