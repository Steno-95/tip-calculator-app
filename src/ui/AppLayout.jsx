import { useState } from "react";

import DollarIcon from "../components/Calculator/DollarIcon";
import PersonIcon from "../components/Calculator/PersonIcon";

import Input from "../components/Calculator/Input";
import Display from "../components/Display/Display";
import calcTip from "../helpers/calcTip";
import ButtonList from "../components/Calculator/ButtonList";

function AppLayout() {
  const [bill, setBill] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tipTotal, setTipTotal] = useState(0);
  const [error, setError] = useState(false);
  const [activePercentage, setActivePercentage] = useState("");
  const [percentage, setPercentage] = useState("");

  //conditional variable to disable the reset button
  const reset = !bill && !numberPeople && !activePercentage;

  const total =
    bill > 0 && numberPeople > 0
      ? +bill / +numberPeople +
        calcTip(activePercentage.slice(0, -1), +bill) / +numberPeople
      : +bill + tipTotal;

  function handleOnTip(percentage) {
    if (!bill || !numberPeople) setError(true);
    const totalTip = calcTip(percentage, Number(bill));
    setTipTotal(totalTip);
  }

  function handleReset() {
    setBill("");
    setNumberPeople("");
    setError(false);
    setTipTotal(0);
    setPercentage("");
    setActivePercentage("");
  }

  return (
    <main className="box md:grid md:grid-cols-2 md:min-w-[45rem] mb-auto lg:min-w-[55rem] min-h-[30rem]">
      <form
        className="flex flex-col gap-5 lg:justify-evenly"
        onSubmit={(e) => {
          e.preventDefault();
          if (!bill || !tipTotal || !numberPeople) return setError(true);
        }}
      >
        <Input
          id={"bill"}
          label={"Bill"}
          connect={bill}
          setter={setBill}
          onTip={(p) => calcTip(p, +bill)}
          error={error}
          onError={setError}
          active={activePercentage}
        >
          <DollarIcon />
        </Input>
        <ButtonList
          activePercentage={activePercentage}
          setActivePercentage={setActivePercentage}
          setPercentage={setPercentage}
          handleOnTip={handleOnTip}
          percentage={percentage}
          bill={bill}
          numberPeople={numberPeople}
          onError={setError}
        />
        <fieldset>
          <Input
            id={"number-of-people"}
            label={"Number of People"}
            connect={numberPeople}
            setter={setNumberPeople}
            onTip={(p) => calcTip(p, +bill)}
            error={error}
            onError={setError}
            active={activePercentage}
          >
            <PersonIcon />
          </Input>
        </fieldset>
      </form>
      <Display
        handleReset={handleReset}
        reset={reset}
        numPeople={numberPeople}
        tip={tipTotal}
        total={total}
      />
    </main>
  );
}

export default AppLayout;
