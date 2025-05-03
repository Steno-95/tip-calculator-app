function Input({ children, id, label }) {
  return (
    <form className="flex flex-col">
      <label htmlFor={id} className="text-[1.1rem] text-(--sub-color)">
        {label}
      </label>
      <div className="flex items-center justify-center py-1.5  focus:outline-2 focus:outline-(--primary)">
        {children}
        <input
          type="text"
          id={id}
          className="bg-(--box-bg) text-(--main-bg) w-full outline-none flex-row-reverse text-right "
        />
      </div>
    </form>
  );
}

export default Input;
