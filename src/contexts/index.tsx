import { createContext } from 'react';
import { TodoStore } from '../stores/ToDoStore';

export const rootStoreContext = createContext({
  todoStore: new TodoStore(),
});
