import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { createTask } = useContext(TaskContext);

	function formSubmit(e) {
		e.preventDefault();
		createTask(title, description);
		setTitle("");
		setDescription("");
	}

	return (
		<>
			<h2>New task</h2>
			<form onSubmit={formSubmit}>
				<input
					type="text"
					placeholder="Title"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					autoFocus
				/>
				<textarea
					rows="3"
					placeholder="Description"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
				/>
				<button type="submit">Add</button>
			</form>
		</>
	);
}
