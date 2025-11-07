import Field from "./Field.jsx"
import Button from "./Button.jsx"

export default function AddTaskForm({
  addTask,
  newTaskTitle,
  setNewTaskTitle,
  newTaskInputRef,
}) {
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }
  return (
    <form className='todo__form' onSubmit={onSubmit}>
      <Field
        children='Новая задача'
        id='new-task'
        className='todo__field'
        value={newTaskTitle}
        ref={newTaskInputRef}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type='submit' onClick={() => addTask()}>
        Добавить
      </Button>
    </form>
  )
}
