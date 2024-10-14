import { stat } from "fs/promises";
import path from "path";
import { OPERATION_FAILED_MESSAGE } from "../constants/constants";

export const handleCdUserCommand = async (currentDirectory, newDirectory) => {
  const resultDirectory = path.isAbsolute(newDirectory)
    ? newDirectory
    : path.resolve(currentDirectory, newDirectory);

  try {
    const stats = await stat(resultDirectory);

    if (!stats.isDirectory()) {
      console.error(OPERATION_FAILED_MESSAGE);
      return currentDirectory;
    }

    return resultDirectory;
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
    return currentDirectory;
  }
};
