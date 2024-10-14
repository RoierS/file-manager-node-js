export const goodbyeMessage = (userName) =>
  `\nThank you for using File Manager, ${userName}, goodbye!`;

export const welcomeMessage = (userName) =>
  `Welcome to File Manager, ${userName}!`;

export const currentWorkingDirectoryMessage = (currWorkingDirectory) =>
  `You are currently in ${currWorkingDirectory}`;

export const INVALID_INPUT_ERROR_MESSAGE = "Invalid input";

export const OPERATION_FAILED_MESSAGE = "Operation failed";

export const FILE_CONTENT_MESSAGE = "File Content:";

export const START_COPYING_MESSAGE = "Start copying...";

export const FINISH_MESSAGE = "Finished!";

export const DELETED_MESSAGE = `\x1b[42m File deleted successfully! \x1b[0m`;

export const FILE_MANAGER_COMMAND = {
  UP: "up",
  CD: "cd",
  LS: "ls",
  CAT: "cat",
  ADD: "add",
  RN: "rn",
  CP: "cp",
  MV: "mv",
  RM: "rm",
  OS: "os",
  HASH: "hash",
  COMPRESS: "compress",
  DECOMPRESS: "decompress",
};

export const REGEX = /"([^"]+)"|(\S+)/g;
