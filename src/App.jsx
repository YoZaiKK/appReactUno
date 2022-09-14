import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useEffect, useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	function createTask( title, description ) {
		setTasks([
			...tasks,
			{
        id : `${tasks.length}`,
				title,
				description,
			},
		]);
    // console.log(tasks);
	}

	function deleteTask(taskId) {
		setTasks(tasks.filter(task => task.id !== taskId))
	}


	return (
		<>
			<TaskForm createTask={createTask} />
			<TaskList tasks={tasks}  deleteTask={deleteTask} />
		</>
	);
}

export default App;
