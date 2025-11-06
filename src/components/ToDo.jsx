import { useState } from "react"
import SearchTaskForm from "./SearchTaskForm.jsx"
import AddTaskForm from "./AddTaskForm.jsx"
import ToDoInfo from "./ToDoInfo.jsx"
import ToDoList from "./ToDoList.jsx"

export default function ToDo() {
  const [taskList, setTaskList] = useState([
    { id: 1, isDone: true, title: "One" },
    { id: 2, isDone: false, title: "Two" },
  ])
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const deleteAllTasks = () => {
    setTaskList([])
  }

  const deleteTask = (taskId) => {
    setTaskList((prevTask) => prevTask.filter((_, i) => i !== taskId))
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`${taskId} ${isDone ? "Выполнено" : "Не выполнено"}`)
  }

  const filterTasks = (query) => {
    console.log(query)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }
      setTaskList([...taskList, newTask])
      setNewTaskTitle("")
    }
  }

  return (
    <div className='todo'>
      <h1 className='todo__title'>To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm filterTasks={filterTasks} />
      <ToDoInfo taskList={taskList} deleteAllTasks={deleteAllTasks} />
      <ToDoList
        taskList={taskList}
        deleteTask={deleteTask}
        toggleTaskComplete={toggleTaskComplete}
      />
    </div>
  )
}
