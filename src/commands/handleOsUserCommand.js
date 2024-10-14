import {
  INVALID_INPUT_ERROR_MESSAGE,
  OS_COMMAND,
} from "../constants/constants.js";
import os from "os";

export const handleOsUserCommand = (currentDirectory, rest) => {
  const arg = rest.join("");

  switch (arg) {
    case OS_COMMAND.EOL:
      console.log(JSON.stringify(os.EOL));
      break;
    case OS_COMMAND.CPUS:
      const cpus = os.cpus();
      console.log(cpus);
      break;
    case OS_COMMAND.HOMEDIR:
      console.log(os.homedir());
      break;
    case OS_COMMAND.USERNAME:
      console.log(os.userInfo().username);
      break;
    case OS_COMMAND.ARCH:
      console.log(os.arch());
      break;
    default:
      console.error(INVALID_INPUT_ERROR_MESSAGE);
  }

  return currentDirectory;
};
