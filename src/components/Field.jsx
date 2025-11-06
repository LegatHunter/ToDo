export default function Field({
  children,
  id,
  type = "text",
  className,
  onInput,
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
        onInput={onInput}
        value={value}
      />
    </div>
  )
}
