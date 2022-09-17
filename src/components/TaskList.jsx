import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
	// useEffect(() => {
	// 	console.log(tasks);
	// }, [tasks]);
	const { tasks } = useContext(TaskContext);

	return tasks.length === 0 ? (
		<>
			<br />
			<h1 className="text-3xl text-gray-500 font-extrabold">Agrega una tarea ( ͡° ͜ʖ ͡°)</h1>
		</>
	) : (
		<div className="grid grid-cols-4 gap-2">
			{tasks.map((task) => {
				return <TaskCard key={task.id} task={task} />;
			})}
		</div>
	);
}

export default TaskList;
