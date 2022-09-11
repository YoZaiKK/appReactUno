import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function TaskList() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		setTasks(data);
	}, []);

	return tasks.length === 0 ? (
		<h1> No se han agregado tareas </h1>
	) : (
		<div>
			{tasks.map((task) => (
				<div key={task.id}>
					<h1> {task.title}</h1>
					<p> {task.description}</p>
				</div>
			))}
		</div>
	);
}

export default TaskList;
