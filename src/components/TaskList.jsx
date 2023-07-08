import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
	const { tasks } = useContext(TaskContext);

	// Valida si el arreglo de tareas tiene elementos
	if (tasks.length === 0) {
		return (
			<div>
				<h2>Tasks not found.</h2>
			</div>
		);
	}

	return (
		<div>
			<h2>Tasks</h2>
			{/* Por cada tarea muestre sus datos con la funcion map() */}
			{tasks.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
		</div>
	);
}
