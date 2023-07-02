// Componente Tasklist
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

export default function TaskList() {
	// Definir el estado de las tareas como un arreglo vacío
	const [tasks, setTasks] = useState([]);

	// Cando cargue el componente le asigna los valores de task(data) al estado de las tareas
	useEffect(() => {
		setTasks(data);
	}, []);

	// Valida si el arreglo de tareas tiene elementos
	if (tasks.length === 0) {
		return <div>Tasks not found</div>;
	}

	return (
		<div>
			<h1>Tasks</h1>
			{/* Por cada tarea muestre sus datos con la funcion map() */}
			{tasks.map((task) => (
				<div key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</div>
			))}
		</div>
	);
}
