export default function ToDoInfo({ taskList, deleteAllTasks }) {
  return (
    <div className='todo__info'>
      <div className='todo__total-tasks'>
        Total tasks: <span>{taskList.length}</span>
      </div>
      <button
        className={`todo__delete-all-button ${
          taskList.length > 0 ? "is-visible" : ""
        }`}
        type='button'
        onClick={deleteAllTasks}>
        Delete all
      </button>
    </div>
  )
}
