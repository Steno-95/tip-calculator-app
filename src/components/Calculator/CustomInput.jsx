function CustomInput({
  setActive,
  setPercentage,
  percentage,
  onTip,
  reset,
  onError,
}) {
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
        onClick={() => {
          if (reset) onError(true);
          setActive("");
        }}
        onChange={(e) => {
          e.preventDefault();
          if (reset) return;
          if (e.target.value.length > 2) return;
          setActive(e.target.value);
          setPercentage(e.target.value);
          onTip(e.target.value);
        }}
        min={0}
        max={90}
        maxLength={2}
        type="number"
        name="custom-tip"
      />
    </li>
  );
}

export default CustomInput;
