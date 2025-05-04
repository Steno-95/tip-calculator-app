function ButtonReset({ handleReset, reset }) {
  const disabled = reset
    ? "text-(--sub-color) bg-(--light-bg)"
    : "text-(--main-bg) bg-(--primary) hover:bg-(--body-bg) focus:bg-(--body-bg) cursor-pointer";
  return (
    <button
      className={`text-[1rem] py-1.5 rounded mt-3 md:mt-auto ${disabled}`}
      onClick={() => handleReset()}
      disabled={reset}
    >
      RESET
    </button>
  );
}

export default ButtonReset;
