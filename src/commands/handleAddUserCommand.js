import path from "path";
import { promises as fs } from "fs";
import { OPERATION_FAILED_MESSAGE } from "../constants/constants.js";

export const handleAddUserCommand = async (currentDirectory, rest) => {
  const fileName = rest.join(" ");
  const fullPathToFile = path.resolve(currentDirectory, fileName);

  try {
    await fs.writeFile(fullPathToFile, fileName, {
      flag: "wx",
      encoding: "utf-8",
    });
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
    return currentDirectory;
  }

  return currentDirectory;
};
