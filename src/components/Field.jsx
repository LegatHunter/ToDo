export default function Field({ children, id, type }) {
  return (
    <div className='todo__field field'>
      <label className='field__label' htmlFor={id}>
        {children}
      </label>
      <input
        className='field__input'
        id={id}
        placeholder=' '
        autoComplete='off'
        type={type}
      />
    </div>
  )
}
