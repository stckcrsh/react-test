import { TodoAction } from '../actions';
import { CREATE_TODO, FINISH_TODO } from '../constants';
import { TodoState, Todo } from '../types';

export const initialState: TodoState = {
	entities: {
		'0': {
			id: '0',
			title: 'Some Todo',
			description: 'You know the Todo',
			finished: false
		}
	},
	ids: ['0']
};

export function todo(state: TodoState, action: TodoAction): TodoState {
	switch (action.type) {
		case FINISH_TODO:
			const id = action.payload as string;
			return { ...state, entities: { ...state.entities, [id]: { ...state.entities[id], finished: !state.entities[id].finished } } }
		case CREATE_TODO:
			const todo = action.payload as Todo;
			return { ...state, ids: state.ids.concat([todo.id]), entities: { ...state.entities, [todo.id]: todo } }
		default:
			return state;
	}
}