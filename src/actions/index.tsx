import * as constants from '../constants'
import { Todo } from '../types/index'

export interface FinishTodo {
	type: constants.FINISH_TODO;
	payload: string;
}

export interface CreateTodo {
	type: constants.CREATE_TODO;
	payload: Todo;
}

export type TodoAction = CreateTodo | FinishTodo;

export function createTodo(todo: Todo): CreateTodo {
	return {
		type: constants.CREATE_TODO,
		payload: todo
	}
}

export function finishTodo(id: string): FinishTodo {
	return {
		type: constants.FINISH_TODO,
		payload: id
	}
}