import Field from "./Field"

export default function SearchTaskForm({ searchQuery, setSearchQuery }) {
  return (
    <form className='todo__form' onSubmit={(event) => event.preventDefault()}>
      <Field
        children='Поиск'
        id='search-task'
        type='search'
        className='todo__field'
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}
