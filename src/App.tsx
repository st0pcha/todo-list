import { useState } from 'react';
import './index.css';

function App() {
	const [todo, setTodo] = useState([
		{
			id: 1,
			title: 'Make coffee',
			ended: false
		}
	]);
	const [value, setValue] = useState('');
	const [ids, setIds] = useState(2);

	const addTodo = () => {
		setIds(ids + 1);

		setTodo([
			...todo,
			{
				id: ids,
				title: value,
				ended: false
			}
		]);

		setValue('');
	};

	const deleteTodo = (id: number) => {
		setIds(ids + 1);
		let newTodo = [...todo].filter(item => item.id !== id);
		setTodo(newTodo);
	};

	const changeStatus = (id: number) => {
		let newTodo = [...todo].filter(item => {
			if (item.id === id) item.ended = !item.ended;
			return item;
		});

		setTodo(newTodo);
	};

	return (
		<div className="App">
			<input placeholder="Enter the task" value={value} onChange={e => setValue(e.target.value)} />
			<button onClick={addTodo}>Add</button>
			{todo.map(item => (
				<div key={item.id}>
					<p onClick={() => changeStatus(item.id)}>{item.ended ? <s>{item.title}</s> : <>{item.title}</>}</p>
					<button className="btn" onClick={() => deleteTodo(item.id)}>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}

export default App;
