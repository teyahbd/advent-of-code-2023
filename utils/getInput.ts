import * as fs from "fs";

export const getInput = (path: string): string[] => {
  const inputString = fs.readFileSync(path, "utf8");
  return inputString.split("\n");
};
