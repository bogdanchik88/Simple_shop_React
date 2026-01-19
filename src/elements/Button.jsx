const Button = ({ img, onClick }) => {
  return (
    <button onClick={onClick} className="hover:scale-[120%]
      transition-transform duration-200
      active:scale-[100%]">
      <img src={img} alt="icon" />
    </button>
  )
}

export default Button
