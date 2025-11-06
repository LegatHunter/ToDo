import ToDoItem from "./ToDoItem.jsx"

export default function ToDoList({ taskList, deleteTask, toggleTaskComplete }) {
  if (taskList.length === 0) {
    return <div className='todo__empty-message'></div>
  }
  return (
    <ul className='todo__list'>
      {taskList.map((task) => {
        return (
          <ToDoItem
            key={task.id}
            title={task.title}
            id={task.id}
            isDone={task.isDone}
            className='todo-item'
            deleteTask={deleteTask}
            toggleTaskComplete={toggleTaskComplete}
          />
        )
      })}
    </ul>
  )
}
