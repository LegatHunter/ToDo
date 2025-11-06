export default function ToDoInfo({ taskList, deleteAllTasks }) {
  const hasTasks = taskList.length > 0
  return (
    <div className='todo__info'>
      <div className='todo__total-tasks'>
        Total tasks: <span>{taskList.length}</span>
      </div>
      {hasTasks && (
        <button
          className={`todo__delete-all-button`}
          type='button'
          onClick={deleteAllTasks}>
          Delete all
        </button>
      )}
    </div>
  )
}
