function CustomInput({ setActive, setPercentage, percentage, onTip }) {
  return (
    <li
      className={`bg-(--box-bg) rounded focus-within:outline-2 focus-within:outline-(--primary) text-[1rem] flex h-fit ${
        percentage.length && "outline-2 outline-(--primary)"
      }`}
    >
      <input
        className="input "
        placeholder="Custom"
        value={percentage}
        onClick={() => setActive("")}
        onChange={(e) => {
          e.preventDefault();
          setActive("");
          setPercentage(e.target.value);
          onTip(e.target.value);
        }}
        min={0}
        max={90}
        type="number"
        name="custom-tip"
      />
    </li>
  );
}

export default CustomInput;
