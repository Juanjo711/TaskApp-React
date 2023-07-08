import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-slate-900 p-4 rounded-md text-gray-50">
			<h3 className="text-xl font-bold capitalize">{task.title}</h3>
			<p className="text-md text-gray-600">{task.description}</p>
			<button
				className="bg-red-600 px-2 py-1 mt-4 rounded-sm hover:bg-red-500"
				onClick={() => {
					deleteTask(task.id);
				}}
			>
				Delete
			</button>
		</div>
	);
}

export default TaskCard;
