import { getInput } from "../utils/getInput";
import findActualCalibrationSum from "./findActualCalibrationSum";
import findCalibrationSum from "./findCalibrationSum";

// Setup!

const input = getInput("input.txt");

// Part One

console.log("Part One!");

const partOneResult = findCalibrationSum(input);

console.log("The sum of the calibration values is ", partOneResult);

// Part Two

console.log("Part Two!");

const partTwoResult = findActualCalibrationSum(input);

console.log("The REAL sum of the calibration values is ", partTwoResult);
