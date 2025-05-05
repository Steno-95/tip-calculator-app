function DisplayRow({ text, value }) {
  const verifiedValue = value ? value : 0;
  return (
    <article className="flex items-center justify-between ">
      <div className="flex flex-col">
        <p className="text-[.9rem] text-(--white) lg:text-[1.2rem]">{text}</p>
        <span className="text-[.7rem] lg:text-[1rem] text-(--sub-color)">
          / person
        </span>
      </div>
      <p className="text-(--primary) text-[1.6rem] lg:text-[1.8rem]">
        ${verifiedValue.toFixed(2)}
      </p>
    </article>
  );
}

export default DisplayRow;
