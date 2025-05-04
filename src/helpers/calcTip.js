function calcTip(percentage, value) {
  const tip = (value / 100) * percentage;
  return tip;
}

export default calcTip;
