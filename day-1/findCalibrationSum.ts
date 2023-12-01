export default function findCalibrationSum(input: string[]) {
  const calibrationSum = input.reduce((accumulator, currentValue) => {
    const digits = currentValue.match(/\d/g);

    if (!digits) return accumulator;

    const calibrationValue = Number(digits[0] + digits.slice(-1));

    return accumulator + calibrationValue;
  }, 0);

  return calibrationSum;
}
