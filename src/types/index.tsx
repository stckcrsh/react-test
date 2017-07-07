export interface TodoState {
	ids: string[];
	entities: { [id: string]: Todo }
}

export interface Todo {
	id: string;
	title: string;
	description: string;
	finished: boolean;
}