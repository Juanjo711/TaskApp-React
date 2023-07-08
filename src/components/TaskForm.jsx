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
		<div className="bg-slate-900 max-w-md mx-auto p-6 mb-3 rounded-md">
			<h2 className="text-gray-50 text-xl font-bold mb-2">New task</h2>
			<form onSubmit={formSubmit}>
				<input
					type="text"
					placeholder="Title"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					className="bg-slate-900 text-gray-200 p-1 w-full mb-3 border-b-2 border-slate-600 focus:outline-none"
					autoFocus
				/>
				<textarea
					rows="3"
					placeholder="Description"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
					className="bg-slate-900 text-gray-300 p-1 w-full mb-3 border-b-2 border-slate-600 focus:outline-none"
				/>
				<button
					type="submit"
					className="bg-slate-950 text-gray-50 font-bold w-full py-1 hover:bg-slate-800"
				>
					Add
				</button>
			</form>
		</div>
	);
}
