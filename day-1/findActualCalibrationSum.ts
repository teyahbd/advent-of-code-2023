const extraDigits: { [key: string]: string } = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "0",
  eleven: "1",
  twelve: "2",
  thirteen: "3",
  ty: "0",
};

interface FoundDigits {
  value: string;
  index: number;
}

function findDigits(inputString: string, regex: RegExp): FoundDigits[] {
  const digits = [...inputString.matchAll(regex)].reduce(
    (accumulator: FoundDigits[], currentValue) => {
      if (currentValue.index !== undefined)
        accumulator.push({ value: currentValue[0], index: currentValue.index });
      return accumulator;
    },
    []
  );

  return digits;
}

export default function findActualCalibrationSum(input: string[]) {
  const calibrationSum = input.reduce((accumulator, currentString) => {
    const foundDigits = findDigits(currentString, /\d/g);

    Object.keys(extraDigits).forEach((key) => {
      const regexp = new RegExp(key, "g");

      const wordDigits = findDigits(currentString, regexp);

      wordDigits.forEach((match) => foundDigits.push(match));
    });

    if (foundDigits.length < 1) {
      console.log(foundDigits, currentString);
      console.log("hmmm");
      return accumulator;
    }

    foundDigits.sort((a: FoundDigits, b: FoundDigits) => a.index - b.index);

    const firstDigit = foundDigits[0];

    const lastDigit = foundDigits.slice(-1)[0];

    const firstDigitValue = isNaN(firstDigit.value as any)
      ? extraDigits[firstDigit.value]
      : firstDigit.value;

    const lastDigitValue = isNaN(lastDigit.value as any)
      ? extraDigits[lastDigit.value]
      : lastDigit.value;

    return accumulator + Number(firstDigitValue + lastDigitValue);
  }, 0);

  return calibrationSum;
}
