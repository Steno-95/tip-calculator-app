import DisplayRow from "./DisplayRow";
import ButtonReset from "./ButtonReset";

function Display({ handleReset, reset, tip, total, numPeople }) {
  const numberPeople = numPeople.length === 0 ? 1 : +numPeople;
  return (
    <div
      className="bg-(--main-bg) px-5 py-7 flex flex-col gap-4
rounded-xl"
    >
      <DisplayRow text={"Tip Amount"} value={tip / numberPeople} />
      <DisplayRow text={"Total"} value={total} />
      <ButtonReset handleReset={handleReset} reset={reset} />
    </div>
  );
}

export default Display;
