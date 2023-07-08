import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useState, useEffect } from "react";

function App() {
	// Definir el estado de las tareas como un arreglo vacío
	const [tasks, setTasks] = useState([]);

	// Cando cargue el componente le asigna los valores de task(data) al estado de las tareas
	useEffect(() => {
		setTasks(data);
	}, []);

	function createTask(taskTitle, taskDescription) {
		setTasks([
			...tasks,
			{
				id: tasks.length + 1,
				title: taskTitle,
				description: taskDescription,
			},
		]);
	}

	function deleteTask(taskId) {
		// console.log("delete " + taskId);
		setTasks(tasks.filter((task) => task.id !== taskId));
		console.log(tasks);
	}

	return (
		<>
			<TaskForm createTask={createTask} />
			{/* Envia las tareas como un props al componente tasklist */}
			<Tasklist tasks={tasks} deleteTask={deleteTask} />
		</>
	);
}

export default App;
