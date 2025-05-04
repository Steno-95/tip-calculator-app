function Label({ id, label, displayError }) {
  return (
    <div className="flex justify-between">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {displayError && (
        <label htmlFor={id} className="label text-red-400 tracking-tighter">
          Can't be zero
        </label>
      )}
    </div>
  );
}

export default Label;
