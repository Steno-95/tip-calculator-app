import Label from "./Label";

function Input({ children, id, label, connect, setter, error, onError }) {
  const displayError = !connect && error;
  return (
    <fieldset className="flex flex-col">
      <Label id={id} label={label} error={displayError} />
      <div
        className={`flex items-center justify-center   focus-within:outline-2 focus-within:outline-(--primary) my-1.5 ${
          displayError && "outline-2 outline-red-300"
        }`}
      >
        {children}
        <input
          type="text"
          id={id}
          className={`input`}
          placeholder="0"
          value={connect}
          onChange={(e) => {
            onError(false);
            setter(e.target.value);
          }}
        />
      </div>
    </fieldset>
  );
}

export default Input;
