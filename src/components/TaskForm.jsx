import { useState } from "react";

const TaskForm = ({ createTask }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title, description);
		setTitle('')
		setDescription('') 
	};

	return (
		<div>
			<form onSubmit={handleSubmit} action="">
				<input
					type="text"
					placeholder="Escribe tu tarea"
					onChange={(event) => setTitle(event.target.value)}
					value={title}
				/>
				
				<textarea   
					placeholder="Description"
					onChange={(event) => setDescription(event.target.value)}
					value={description}
				/>
				<button>Guardar</button>
			</form>
		</div>
	);
};

export default TaskForm;
