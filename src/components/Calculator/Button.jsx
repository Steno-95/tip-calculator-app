function Button({ content, active, setActive, setPercentage, onTip, reset }) {
  const { text } = content;

  return (
    <li
      className={
        "main flex items-center justify-center hover:bg-(--body-bg)" +
        ` ${active === text && "bg-(--primary) text-(--main-bg)"}` +
        `${
          reset
            ? " focus-within:bg-(--body-bg) focus-within:text-(--main-bg)"
            : ""
        }`
      }
      onClick={() => {
        onTip(text.slice(0, -1));
        if (reset) return;
        setPercentage("");
        setActive(text);
      }}
    >
      <button
        className="capitalize cursor-pointer outline-none w-full h-full"
        type="button"
      >
        {text}
      </button>
    </li>
  );
}

export default Button;
