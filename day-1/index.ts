import { getInput } from "../utils/getInput";
import findCalibrationSum from "./findCalibrationSum";

// Setup!

const input = getInput("input.txt");

// Part One

console.log("Part One!");

const partOneResult = findCalibrationSum(input);

console.log("The sum of the calibration values is ", partOneResult);
