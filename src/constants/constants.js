export const goodbyeMessage = (userName) =>
  `\nThank you for using File Manager, ${userName}, goodbye!`;

export const welcomeMessage = (userName) =>
  `\x1b[32m Welcome to File Manager, ${userName}!\x1b[0m`;

export const currentWorkingDirectoryMessage = (currWorkingDirectory) =>
  `\x1b[32m You are currently in ${currWorkingDirectory}\x1b[0m`;

export const INVALID_INPUT_ERROR_MESSAGE = `\x1b[31m Invalid input \x1b[0m`;

export const OPERATION_FAILED_MESSAGE = `\x1b[31m Operation failed \x1b[0m`;

export const FILE_CONTENT_MESSAGE = `\x1b[42m File Content: \x1b[0m`;

export const START_COPYING_MESSAGE = `\x1b[42m Start copying... \x1b[0m`;

export const FINISH_MESSAGE = `\x1b[42m Finished! \x1b[0m`;

export const DELETED_MESSAGE = `\x1b[42m File deleted successfully! \x1b[0m`;
export const HASH_MESSAGE = `\x1b[42m Hash:\x1b[0m`;

export const START_COMPRESSING_MESSAGE = `\x1b[42m Start compressing... \x1b[0m`;

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

export const OS_COMMAND = {
  EOL: "--EOL",
  CPUS: "--cpus",
  HOMEDIR: "--homedir",
  USERNAME: "--username",
  ARCH: "--architecture",
};
