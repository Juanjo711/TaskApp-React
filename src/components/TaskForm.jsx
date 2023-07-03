import { useState } from "react";

export default function TaskForm({ createTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

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
					placeholder="Titulo"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					autoFocus
				/>
				<textarea
					rows="3"
					placeholder="descripción"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
				></textarea>
				<button type="submit">Add</button>
			</form>
		</>
	);
}
