import Field from "./Field.jsx"
import Button from "./Button.jsx"

export default function AddTaskForm() {
  return (
    <form className='todo__form'>
      <Field children='New task' id='new-task' />
      <Button />
    </form>
  )
}
