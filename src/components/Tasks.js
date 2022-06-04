import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle}) => {
    //state is one way data you can't "push" new tasks into it
    
  return (
    <>
      {tasks.map((task)=>(
      <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
