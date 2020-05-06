import { v4 as uuidv4 } from 'uuid';
import useLocalStoragestate from './useLocalStorageState';
const useStateTodos = (initialVal) => {
	const [todos, setTodos] = useLocalStoragestate('todos', initialVal);

	return {
		todos,
		addTodo: (newTodo) => {
			setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
		},
		removeTodo: (todoId) => {
			const updatedTodo = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodo);
		},
		checkedTodo: (todoId) => {
			const updatedTodo = todos.map((todo) =>
				todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
			);
			setTodos(updatedTodo);
		},
		editTodo: (todoId, newTask) => {
			const updatedTodo = todos.map((todo) =>
				todo.id === todoId ? { ...todo, task: newTask } : todo,
			);
			setTodos(updatedTodo);
		},
	};
};
export default useStateTodos;
