function TaskCard({ task, deleteTask }) {
	return (
		<div>
			<h3>{task.title}</h3>
			<p>{task.description}</p>
			<button
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
