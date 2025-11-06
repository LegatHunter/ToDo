import { useState, useEffect } from "react"
import SearchTaskForm from "./SearchTaskForm.jsx"
import AddTaskForm from "./AddTaskForm.jsx"
import ToDoInfo from "./ToDoInfo.jsx"
import ToDoList from "./ToDoList.jsx"

export default function ToDo() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      return JSON.parse(savedTasks)
    }
    return []
  })
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Точно?")
    isConfirmed && setTaskList([])
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }
        return task
      })
    )
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
      setSearchQuery("")
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }, [taskList])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks =
    clearSearchQuery.length > 0
      ? taskList.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery)
        )
      : null

  return (
    <div className='todo'>
      <h1 className='todo__title'>To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ToDoInfo taskList={taskList} deleteAllTasks={deleteAllTasks} />
      <ToDoList
        taskList={taskList}
        filteredTasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskComplete={toggleTaskComplete}
      />
    </div>
  )
}
