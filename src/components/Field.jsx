export default function Field({
  children,
  id,
  type = "text",
  className,
  input,
  value,
}) {
  return (
    <div className={`field ${className}`}>
      <label className='field__label' htmlFor={id}>
        {children}
      </label>
      <input
        className='field__input'
        id={id}
        placeholder=' '
        autoComplete='off'
        type={type}
        onInput={input}
        value={value}
      />
    </div>
  )
}
