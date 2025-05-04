function Button({ content, active, setActive, setPercentage, onTip }) {
  const { text } = content;

  return (
    <li
      className={
        "main focus-within:bg-(--primary) focus-within:text-(--main-bg) flex items-center justify-center" +
        ` ${active === text && "bg-(--primary) text-(--main-bg)"}`
      }
      onClick={() => {
        setActive(text);
        setPercentage("");
        onTip(text.slice(0, -1));
      }}
    >
      <button className="capitalize cursor-pointer outline-none w-full h-full">
        {text}
      </button>
    </li>
  );
}

export default Button;
