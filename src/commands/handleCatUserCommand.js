import { createReadStream } from "fs";
import path from "path";
import {
  OPERATION_FAILED_MESSAGE,
  FILE_CONTENT_MESSAGE,
} from "../constants/constants.js";

export const handleCatUserCommand = async (currentDirectory, rest) => {
  const pathToFile = rest.join(" ");
  const fullPathToFile = path.resolve(currentDirectory, pathToFile);

  try {
    await new Promise((res, rej) => {
      const readStream = createReadStream(fullPathToFile, {
        encoding: "utf-8",
      });

      readStream.on("open", () => console.log(FILE_CONTENT_MESSAGE));

      readStream.on("data", (chunk) => console.log(chunk));

      readStream.on("error", (error) => rej(error));

      readStream.on("end", () => res(currentDirectory));
    });
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
  }

  return currentDirectory;
};
