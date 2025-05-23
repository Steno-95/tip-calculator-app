import { buttons } from "../../../data/data.json";
import Button from "./Button";
import CustomInput from "./CustomInput";

function ButtonList({
  activePercentage,
  setActivePercentage,
  setPercentage,
  handleOnTip,
  percentage,
  bill,
  numberPeople,
  onError,
}) {
  const resetTipButton = !bill && !numberPeople;

  return (
    <fieldset className="flex flex-col lg:min-h-fit">
      <span className="label mb-2 lg:mb-5 lg:text-xl">Select Tip %</span>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {buttons.map((item) => (
          <Button
            key={item.text}
            content={item}
            active={activePercentage}
            setActive={setActivePercentage}
            setPercentage={setPercentage}
            onTip={handleOnTip}
            reset={resetTipButton}
          />
        ))}
        <CustomInput
          setActive={setActivePercentage}
          percentage={percentage}
          setPercentage={setPercentage}
          onTip={handleOnTip}
          reset={resetTipButton}
          onError={onError}
        />
      </ul>
    </fieldset>
  );
}

export default ButtonList;
