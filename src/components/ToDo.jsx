import { useState, useEffect, useRef } from "react"
import SearchTaskForm from "./SearchTaskForm.jsx"
import AddTaskForm from "./AddTaskForm.jsx"
import ToDoInfo from "./ToDoInfo.jsx"
import ToDoList from "./ToDoList.jsx"
import Button from "./Button.jsx"

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
  const newTaskInputRef = useRef(null)
  const firsIncompleteTaskRef = useRef(null)
  const firsIncompleteTaskId = taskList.find(({ isDone }) => !isDone)?.id

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
      newTaskInputRef.current.focus()
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

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
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ToDoInfo taskList={taskList} deleteAllTasks={deleteAllTasks} />
      <Button
        onClick={() =>
          firsIncompleteTaskRef.current?.scrollIntoView({ behavior: "smooth" })
        }>
        Первая невыполненная задача
      </Button>
      <ToDoList
        taskList={taskList}
        filteredTasks={filteredTasks}
        firsIncompleteTaskRef={firsIncompleteTaskRef}
        firsIncompleteTaskId={firsIncompleteTaskId}
        deleteTask={deleteTask}
        toggleTaskComplete={toggleTaskComplete}
      />
    </div>
  )
}
