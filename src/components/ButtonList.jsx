import { buttons } from "../../data/data.json";
import Button from "../ui/Button";
import CustomInput from "../components/CustomInput";

function ButtonList({
  activePercentage,
  setActivePercentage,
  setPercentage,
  handleOnTip,
  percentage,
}) {
  return (
    <fieldset className="flex flex-col">
      <span className="label mb-2">Select Tip %</span>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {buttons.map((item) => (
          <Button
            key={item.text}
            content={item}
            active={activePercentage}
            setActive={setActivePercentage}
            setPercentage={setPercentage}
            onTip={handleOnTip}
          />
        ))}
        <CustomInput
          setActive={setActivePercentage}
          percentage={percentage}
          setPercentage={setPercentage}
          onTip={handleOnTip}
        />
      </ul>
    </fieldset>
  );
}

export default ButtonList;
