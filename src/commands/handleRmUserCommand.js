import { promises as fs } from "fs";
import path from "path";
import {
  OPERATION_FAILED_MESSAGE,
  DELETED_MESSAGE,
} from "../constants/constants.js";

export const handleRmUserCommand = async (currentDirectory, rest) => {
  const fileName = rest.join(" ");
  const fullPathToFile = path.resolve(currentDirectory, fileName);

  try {
    await fs.access(fullPathToFile);
    await fs.unlink(fullPathToFile);

    console.log(DELETED_MESSAGE);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(OPERATION_FAILED_MESSAGE);
      return currentDirectory;
    }
    console.log(OPERATION_FAILED_MESSAGE);
    return currentDirectory;
  }

  return currentDirectory;
};
