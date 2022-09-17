import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const TaskCard = ({ task }) => {
	const { deleteTask } = useContext(TaskContext);
	return (
		<div className="bg-gray-800 text-teal-400 p-4 rounded-md shadow-md">
			<h1 className="text-xl font-bold capitalize"> {task.title} </h1>
			<p className="text-teal-500"> {task.description} </p>
			<button
				className="bg-red-900 text-gray-800 px-2 py-1 rounded-md mt-4 hover:bg-red-700 "
				onClick={() => {
					deleteTask(task.id);
				}}
			>
				Eliminar Tarea
			</button>
		</div>
	);
};

export default TaskCard;
