import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
	return (
		<main className="bg-slate-950 min-h-screen">
			<div className="container mx-auto p-10">
				<TaskForm />
				<Tasklist />
			</div>
		</main>
	);
}

export default App;
