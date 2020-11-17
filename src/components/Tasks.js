export function Task(props) { 
	let theTask = props.task //local variable for readability

	//some data processing
	let className = '';
	if(theTask.complete) {
		className = 'font-strike';
	}
	
	return (
		<li className={className} >
			{theTask.description}
		</li>
	);
}
	
export default function TaskList(props) {
	//do data processing
	//this.props.tasks is an ARRAY of JS Objects
	let taskComponents = props.tasks.map((eachTask) => {
	  let singleTaskElem = <Task key={eachTask.id} task={eachTask} />
	  return singleTaskElem;
	})

	//what DOM is shown in a <TaskList>
	return (
	  <ol>
		  {taskComponents}
	  </ol>
	);
}