import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
	const { tasks } = useContext(TaskContext);

	// Valida si el arreglo de tareas tiene elementos
	if (tasks.length === 0) {
		return (
			<div>
				<h2 className="text-gray-50 font-bold text-center mt-4">
					Tasks not found.
				</h2>
			</div>
		);
	}

	return (
		<>
			<h2 className="text-gray-50 text-xl font-bold">Tasks</h2>
			<div className="grid grid-cols-4 gap-3">
				{/* Por cada tarea muestre sus datos con la funcion map() */}
				{tasks.map((task) => (
					<TaskCard task={task} key={task.id} />
				))}
			</div>
		</>
	);
}
