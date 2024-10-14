import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { OPERATION_FAILED_MESSAGE } from "../constants/constants.js";
import {
  REGEX,
  START_COPYING_MESSAGE,
  FINISH_MESSAGE,
} from "../constants/constants.js";

export const handleCpUserCommand = async (currentDirectory, rest) => {
  const commandInput = rest.join(" ");
  const args = commandInput.match(REGEX);
  const cleanedArgs = args.map((arg) => arg.replace(/"/g, "").trim());

  const srcFilePath = cleanedArgs[0];
  const dstDirectoryPath = cleanedArgs[1];
  console.log(srcFilePath);
  console.log(dstDirectoryPath);

  const dstFilePath = path.join(dstDirectoryPath, path.basename(srcFilePath));

  try {
    await fs.access(srcFilePath);

    try {
      await fs.access(dstFilePath);

      throw new Error(OPERATION_FAILED_MESSAGE);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error(OPERATION_FAILED_MESSAGE);
      }
    }
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);

    return currentDirectory;
  }

  try {
    await new Promise((res, rej) => {
      const readStream = createReadStream(srcFilePath);
      const writeStream = createWriteStream(dstFilePath);

      readStream.pipe(writeStream);

      readStream.on("open", () => console.log(START_COPYING_MESSAGE));

      readStream.on("error", (error) => rej(error));

      writeStream.on("finish", () => {
        console.log(FINISH_MESSAGE);
        res(currentDirectory);
      });
    });
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
  }

  return currentDirectory;
};
