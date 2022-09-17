import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
const TaskForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title, description);
		setTitle("");
		setDescription("");
	};

	return (
		<div className="max-w-md mx-auto">
			<form onSubmit={handleSubmit} action="" className=" mb-4">
				<div className="relative mt-1 bg-gray-800 rounded-md shadow-lg p-3">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
						Task
					</label> 
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						type="text"
						placeholder="Tengo que..."
						onChange={(event) => setTitle(event.target.value)}
						value={title}
						required
					/>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
						Description
					</label>
					<textarea
						placeholder="Description"
						onChange={(event) => setDescription(event.target.value)}
						value={description}
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
					<button className="bg-gray-900 text-gray-600 px-2 py-1 rounded-md mt-4 hover:bg-gray-700 hover:text-gray-800">
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskForm;
