import TaskCard from "./TaskCard";
import {useEffect} from 'react'

function TaskList({ tasks, deleteTask }) {
	useEffect(() => {
		console.log(tasks); 
	}, [tasks]);
	
	return tasks.length === 0 ? (
		<>
			<h1> No se han agregado tareas </h1>
			<p>Holaaaaaa</p>
		</>
	) : (
		<div>
			{tasks.map((task) => {
				return <TaskCard task={task} deleteTask={deleteTask}/>
			})}
		</div>
	);
}

export default TaskList;
