import { useState } from 'react';

export function Task(props) { 
	const theTask = props.task //local variable for readability

  //store completeness in a state variable
  //const [isComplete, setCompleteness] = useState(theTask.complete)
  const [clickCount, setClickCount] = useState(0)
  console.log("rendering with #clicks:", clickCount);

	//some data processing
	let className = '';
	if(theTask.complete) {
	//if(isComplete) {
		className = 'font-strike';
	}
  
  const handleClick = (event) => {
    console.log("you clicked on", theTask.description);
                                 //AND it will rerender!
    setClickCount(clickCount +1 )

    //call App's toggleComplete

    // setCompleteness(!isComplete) //assign a new value to the state variable
    // console.log("end of handleClick:", clickCount)
    props.howToHandleClick(theTask.id)
  }

	return (
		<li className={className} onClick={handleClick}>
			{theTask.description}
		</li>
	);
}
	
export default function TaskList(props) {
	//do data processing
	//props.tasks is an ARRAY of JS Objects
	let taskComponents = props.tasks.map((eachTask) => {
    let singleTaskElem = (
        <Task 
          key={eachTask.id} 
          task={eachTask} 
          howToHandleClick={props.whatToDoWhenClicked} 
        />
    )
	  return singleTaskElem;
	})

	//what DOM is shown in a <TaskList>
	return (
	  <ol>
		  {taskComponents}
	  </ol>
	);
}