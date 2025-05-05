import { useState } from "react";

import DollarIcon from "./DollarIcon";
import PersonIcon from "./PersonIcon";

import Input from "./Input";
import Display from "../components/Display";
import calcTip from "../helpers/calcTip";
import ButtonList from "../components/ButtonList";

function AppLayout() {
  const [bill, setBill] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tip, setTip] = useState(0);
  const [error, setError] = useState(false);
  const [activePercentage, setActivePercentage] = useState("");
  const [percentage, setPercentage] = useState("");

  const reset = !bill && !numberPeople;
  const total = tip > 0 ? +bill / +numberPeople + tip : tip;

  function handleOnTip(percentage) {
    if (!bill || !numberPeople) return setError(true);
    const tip = calcTip(percentage, Number(bill));
    setTip(tip);
  }

  function handleReset() {
    setBill("");
    setNumberPeople("");
    setError(false);
    setTip(0);
    setPercentage("");
  }

  return (
    <div className="box md:grid md:grid-cols-2 md:min-w-[45rem] mb-auto">
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (!bill || !tip || !numberPeople) return setError(true);
        }}
      >
        <Input
          id={"bill"}
          label={"Bill"}
          connect={bill}
          setter={setBill}
          error={error}
          onError={setError}
        >
          <DollarIcon />
        </Input>
        <ButtonList
          activePercentage={activePercentage}
          setActivePercentage={setActivePercentage}
          setPercentage={setPercentage}
          handleOnTip={handleOnTip}
          percentage={percentage}
        />
        <fieldset>
          <Input
            id={"number-of-people"}
            label={"Number of People"}
            connect={numberPeople}
            setter={setNumberPeople}
            error={error}
            onError={setError}
          >
            <PersonIcon />
          </Input>
        </fieldset>
      </form>
      <Display
        handleReset={handleReset}
        reset={reset}
        tip={tip}
        total={total}
      />
    </div>
  );
}

export default AppLayout;
