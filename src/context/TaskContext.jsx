import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	// Definir el estado de las tareas como un arreglo vacío
	const [tasks, setTasks] = useState([]);

	// Cando cargue el componente le asigna los valores de task(data) al estado de las tareas
	useEffect(() => {
		setTasks(data);
	}, []);

	// Funcion que crea nuevas tareas
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

	// Funcion que elimina tareas
	function deleteTask(taskId) {
		setTasks(tasks.filter((task) => task.id !== taskId));
	}

	return (
		// Pasa la lista de las tareas y las funciones de crear y eliminar en el contexto de las tareas
		<TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
			{props.children}
		</TaskContext.Provider>
	);
}
