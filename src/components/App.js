import { useState } from 'react';

import TaskList from './Tasks';
import { AddTaskForm } from './TaskForms';

function App(props) {

  //give the app some state
  const [tasks, setTasks] = useState(props.tasks)

  //toggles the `complete` property of task with given id
  const toggleTaskCompletion = (taskId) => {
    console.log("toggling completeness of", taskId);
    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = {...theTask} //use spread to copy
      if(taskCopy.id === taskId){
        taskCopy.complete = !taskCopy.complete //toggle
      }
      return taskCopy;
    })
    console.log("updated array", updatedTaskArray)
    setTasks(updatedTaskArray) //set the new state variable AND RERENDER
  }

  //adds a new task with the give description
  const addTask = (taskDescription) => {
    let newTask = {
      id: tasks.length + 1, 
      description: taskDescription,
      complete: false
    }

    let updatedTaskArray = tasks.map((theTask) => {
      let taskCopy = {...theTask} //use spread to copy
      return taskCopy;
    })
    updatedTaskArray.push(newTask);

    setTasks(updatedTaskArray)
  }

  //props.tasks <- IS AN ARRAY

  //do data processing
  let incompleteArray = tasks.filter((task) => !task.complete);
  console.log("Number of incomplete tasks", incompleteArray.length);

  return (
    <div className="container">
      <p className="lead">
        Num things I have to do: <strong>{incompleteArray.length}</strong>
      </p>
      {/* pass down the array */}
      <TaskList tasks={tasks} whatToDoWhenClicked={toggleTaskCompletion} />
      <AddTaskForm addTaskCallback={addTask} />
    </div>
  );
}

export default App;
