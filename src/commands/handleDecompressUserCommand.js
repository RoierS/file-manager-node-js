import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import {
  OPERATION_FAILED_MESSAGE,
  REGEX,
  FINISH_MESSAGE,
} from "../constants/constants.js";
import { createBrotliDecompress } from "zlib";

const pipe = promisify(pipeline);

export const handleDecompressUserCommand = async (currentDirectory, rest) => {
  const commandInput = rest.join(" ");
  const args = commandInput.match(REGEX);
  const cleanedArgs = args.map((arg) => arg.replace(/"/g, "").trim());

  const srcFilePath = cleanedArgs[0];
  const dstDirectoryPath = cleanedArgs[1];
  const parsedPath = path.parse(srcFilePath);
  const originalExt = parsedPath.ext.slice(0, -3);

  const dstFilePath = path.join(
    dstDirectoryPath,
    parsedPath.name + originalExt,
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
    const brotliStream = createBrotliDecompress();
    const srcStream = createReadStream(srcFilePath);
    const dstStream = createWriteStream(dstFilePath);

    await pipe(srcStream, brotliStream, dstStream);

    console.log(FINISH_MESSAGE);
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE, error.message);
  }

  return currentDirectory;
};
