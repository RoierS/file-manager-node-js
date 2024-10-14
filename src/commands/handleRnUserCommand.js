import path from "path";
import { promises as fs } from "fs";
import { OPERATION_FAILED_MESSAGE } from "../constants/constants.js";
import { REGEX } from "../constants/constants.js";

export const handleRnUserCommand = async (currentDirectory, rest) => {
  const commandInput = rest.join(" ");
  const args = commandInput.match(REGEX);
  const cleanedArgs = args.map((arg) => arg.replace(/"/g, "").trim());

  const oldFilePath = cleanedArgs[0];
  const newFileName = cleanedArgs[1];

  const newFilePath = path.resolve(path.dirname(oldFilePath), newFileName);

  try {
    await fs.access(oldFilePath);

    try {
      await fs.access(newFilePath);
      console.error(OPERATION_FAILED_MESSAGE);
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.error(OPERATION_FAILED_MESSAGE);
      }
    }

    await fs.rename(oldFilePath, newFilePath);
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
  }

  return currentDirectory;
};
