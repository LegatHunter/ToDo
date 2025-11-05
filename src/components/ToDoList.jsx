import ToDoItem from "./ToDoItem.jsx"

export default function ToDoList({ taskList }) {
  if (taskList.length === 0) {
    return <div className='todo__empty-message'></div>
  }
  return (
    <ul className='todo__list'>
      <ToDoItem taskList={taskList} />
    </ul>
  )
}
