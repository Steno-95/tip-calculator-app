function Label({ id, label, error }) {
  return (
    <div className="flex justify-between">
      <label htmlFor={id} className="label text-xl">
        {label}
      </label>
      {error && (
        <span
          htmlFor={id}
          className="label text-red-400 tracking-tighter"
          aria-live="polite"
        >
          Can't be zero
        </span>
      )}
    </div>
  );
}

export default Label;
