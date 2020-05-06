import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoFrom from './TodoFrom';
import useStateTodos from './hooks/useStateTodos';

function TodoApp() {
	const initialVal = [{ id: 1, task: 'Pet a Monkey', completed: false }];
	const { todos, addTodo, removeTodo, checkedTodo, editTodo } = useStateTodos(
		initialVal,
	);

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<ToolBar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</ToolBar>
			</AppBar>
			<Grid container justify='center' style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoFrom addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						checkedTodo={checkedTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
export default TodoApp;
