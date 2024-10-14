import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import {
  OPERATION_FAILED_MESSAGE,
  START_COMPRESSING_MESSAGE,
  REGEX,
  FINISH_MESSAGE,
} from "../constants/constants.js";
import { createBrotliCompress } from "zlib";

export const handleCompressUserCommand = async (currentDirectory, rest) => {
  const commandInput = rest.join(" ");
  const args = commandInput.match(REGEX);
  const cleanedArgs = args.map((arg) => arg.replace(/"/g, "").trim());

  const srcFilePath = cleanedArgs[0];
  const dstDirectoryPath = cleanedArgs[1];
  const parsedPath = path.parse(srcFilePath);

  const dstFilePath = path.join(
    dstDirectoryPath,
    parsedPath.name + parsedPath.ext + ".br",
  );

  try {
    await fs.access(srcFilePath);
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);

    return currentDirectory;
  }

  try {
    await fs.access(dstFilePath);

    throw new Error(OPERATION_FAILED_MESSAGE);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error(OPERATION_FAILED_MESSAGE);

      return currentDirectory;
    }
  }

  try {
    await new Promise((res, rej) => {
      const readStream = createReadStream(srcFilePath);
      const writeStream = createWriteStream(dstFilePath);
      const brotliStream = createBrotliCompress();

      readStream.pipe(brotliStream).pipe(writeStream);

      readStream.on("open", () => console.log(START_COMPRESSING_MESSAGE));

      brotliStream.on("error", (error) => rej(error));

      readStream.on("error", (error) => rej(error));

      writeStream.on("error", (error) => rej(error));

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
