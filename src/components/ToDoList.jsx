import ToDoItem from "./ToDoItem.jsx"

export default function ToDoList({
  taskList = [],
  deleteTask,
  toggleTaskComplete,
  filteredTasks,
}) {
  const hasTasks = taskList.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0
  if (!hasTasks) {
    return <div className='todo__empty-message'>Нет задач</div>
  }
  if (hasTasks && isEmptyFilteredTasks) {
    return <div className='todo__empty-message'>Не найдено</div>
  }
  return (
    <ul className='todo__list'>
      {(filteredTasks ?? taskList).map((task) => {
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
