import { commandHandlers } from "./commandHandlersMap.js";
import { INVALID_INPUT_ERROR_MESSAGE } from "../constants/constants.js";

export const handleUserCommand = async (command, currentDirectory) => {
  const [userCommand, ...rest] = command.split(" ");

  const handleCommand = commandHandlers[userCommand];

  if (!handleCommand) {
    console.log(INVALID_INPUT_ERROR_MESSAGE);

    return currentDirectory;
  }

  return handleCommand(currentDirectory, ...rest);
};
