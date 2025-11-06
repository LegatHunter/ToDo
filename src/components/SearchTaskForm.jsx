import Field from "./Field"

export default function SearchTaskForm({ filterTasks }) {
  return (
    <form className='todo__form' onSubmit={(event) => event.preventDefault()}>
      <Field
        children='Search task'
        id='search-task'
        type='search'
        className='todo__field'
        onInput={(event) => filterTasks(event.target.value)}
      />
    </form>
  )
}
