
function TaskList({tasks}) {
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
