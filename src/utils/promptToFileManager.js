import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export const promptToFileManager = () =>
  new Promise((resolve) =>
    rl.question("Write here your command: ", (input) => resolve(input)),
  );
