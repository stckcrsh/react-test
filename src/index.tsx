import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';
// import Hello from './components/Hello';
import TodoListView from './containers/Todo'
import { createStore } from 'redux'
import { TodoState } from './types'
import { todo, initialState } from './reducers'
import { Provider } from 'react-redux';

const store = createStore<TodoState>(todo, initialState);

ReactDOM.render(
  <Provider store={store}>
    <TodoListView />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
