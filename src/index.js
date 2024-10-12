import { getUserName } from "./utils/getUserName.js";
import { promptToFileManager } from "./utils/promptToFileManager.js";
import {
  goodbyeMessage,
  welcomeMessage,
  currentWorkingDirectoryMessage,
} from "./constants/constants.js";
import os from "node:os";
const userName = getUserName();

console.log(welcomeMessage(userName));

process.on("SIGINT", () => {
  console.log(goodbyeMessage(userName));
  process.exit();
});

const startApp = async () => {
  let currWorkingDirectory = os.homedir();
  console.log(currentWorkingDirectoryMessage(currWorkingDirectory));

  while (true) {
    const userCommand = await promptToFileManager();

    if (userCommand === ".exit") {
      console.log(goodbyeMessage(userName));
      process.exit();
    }

    try {
      console.log(currentWorkingDirectoryMessage(currWorkingDirectory));
    } catch (err) {
      console.log(err.message);
    }
  }
};

startApp();
