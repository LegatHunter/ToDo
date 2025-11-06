export default function Button({ children, className = "", type = "button" }) {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  )
}
