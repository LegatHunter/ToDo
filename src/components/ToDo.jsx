import { useState } from "react"
import Field from "./Field.jsx"
import AddTaskForm from "./AddTaskForm.jsx"
import ToDoInfo from "./ToDoInfo.jsx"
import ToDoList from "./ToDoList.jsx"

export default function ToDo() {
  const [taskList, setTaskList] = useState(["test1", "test2"])

  const deleteAllTasks = () => {
    setTaskList([])
  }
  return (
    <div className='todo'>
      <h1 className='todo__title'>To Do List</h1>
      <AddTaskForm />
      <form className='todo__form'>
        <Field children='Search task' id='search-task' type='search' />
      </form>
      <ToDoInfo taskList={taskList} deleteAllTasks={deleteAllTasks} />
      <ToDoList taskList={taskList} />
    </div>
  )
}
