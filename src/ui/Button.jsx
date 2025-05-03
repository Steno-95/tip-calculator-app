function Button({ content, onClick, style }) {
  return (
    <li className={style + " p-2"} onClick={onClick}>
      <button className="capitalize cursor-pointer">{content}</button>
    </li>
  );
}

export default Button;
