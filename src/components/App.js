import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

function App(props) {

  //do data processing
  let incompleteArray = props.tasks.filter((task) => !task.complete);
  console.log("Number of incomplete tasks", incompleteArray.length);

  return (
    <div className="container">
      <p className="lead">
        Num things I have to do: <strong>{incompleteArray.length}</strong>
      </p>
      {/* pass down the array */}
      <TaskList tasks={props.tasks} />
      <AddTaskForm />
    </div>
  );}

export default App;
