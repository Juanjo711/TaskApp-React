// Componente Tasklist
import TaskCard from "./TaskCard";
// Recibe un objeto con una lista de tareas {task}
export default function TaskList({ tasks, deleteTask }) {
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
				<TaskCard task={task} key={task.id} deleteTask={deleteTask} />
			))}
		</div>
	);
}
