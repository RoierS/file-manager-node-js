import path from "path";
import crypto from "crypto";
import { createReadStream, promises as fs } from "fs";
import {
  OPERATION_FAILED_MESSAGE,
  HASH_MESSAGE,
} from "../constants/constants.js";

export const handleHashUserCommand = async (currentDirectory, rest) => {
  const arg = rest.join(" ");
  const fullPath = path.resolve(currentDirectory, arg);

  const hash = crypto.createHash("sha256");

  try {
    await fs.access(fullPath);
    await new Promise((res, rej) => {
      const fileStream = createReadStream(fullPath);

      fileStream.on("data", (chunk) => hash.update(chunk));

      fileStream.on("end", () => {
        console.log(HASH_MESSAGE, hash.digest("hex")), res(currentDirectory);
      });

      fileStream.on("error", (error) => {
        rej(error);
      });
    });
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE);
  }

  return currentDirectory;
};
