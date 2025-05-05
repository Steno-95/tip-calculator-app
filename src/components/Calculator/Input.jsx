import Label from "./Label";

function Input({
  children,
  id,
  label,
  connect,
  setter,
  error,
  onError,
  onTip,
  active,
}) {
  const displayError = !connect && error;
  return (
    <fieldset className="flex flex-col lg:gap-3">
      <Label id={id} label={label} error={displayError} />
      <div
        className={`flex items-center justify-center   focus-within:outline-2 focus-within:outline-(--primary) my-1.5 ${
          displayError && "outline-2 outline-red-300"
        }`}
      >
        {children}
        <input
          type="number"
          id={id}
          className={`input`}
          placeholder="0"
          value={connect}
          onChange={(e) => {
            onError(false);
            setter(e.target.value);
            onTip(active.slice(0, -1));
          }}
          min={0}
        />
      </div>
    </fieldset>
  );
}

export default Input;
