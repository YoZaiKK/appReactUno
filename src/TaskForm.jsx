import { useState } from "react";

const TaskForm = ({createTask}) => {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); 
		// const newTask = {
		// 	id: 4,
		// 	title,
		// 	description, 
		// }
		createTask(title, description)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} action="">
				<input
					type="text"
					placeholder="Escribe tu tarea"
					onChange={(event) => {
						setTitle(event.target.value)
					}}
				/>
				<input
					type="text"
					placeholder="Description"
					onChange={(event) => {
						setDescription(event.target.value)
					}}
				/>
				<button>Guardar</button>
			</form>
		</div>
	);
};

export default TaskForm;
