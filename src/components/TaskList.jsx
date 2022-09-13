import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
	return tasks.length === 0 ? (
		<>
			<h1> No se han agregado tareas </h1>
			<p>Holaaaaaa</p>
		</>
	) : (
		<div>
			{tasks.map((task) => {
				return <TaskCard task={task} />
			})}
		</div>
	);
}

export default TaskList;
