import { handleUpUserCommand } from "./handleUpUserCommand.js";
import { handleCdUserCommand } from "./handleCdUserCommand.js";
import { handleLsUserCommand } from "./handleLsUserCommand.js";
import { handleCatUserCommand } from "./handleCatUserCommand.js";
import { handleAddUserCommand } from "./handleAddUserCommand.js";
import { handleRnUserCommand } from "./handleRnUserCommand.js";
import { handleCpUserCommand } from "./handleCpUserCommand.js";
import { handleMvUserCommand } from "./handleMvUserCommand.js";
import { handleRmUserCommand } from "./handleRmUserCommand.js";
import { handleOsUserCommand } from "./handleOsUserCommand.js";
import { handleHashUserCommand } from "./handleHashUserCommand.js";
import { handleCompressUserCommand } from "./handleCompressUserCommand.js";
import { handleDecompressUserCommand } from "./handleDecompressUserCommand.js";
import { FILE_MANAGER_COMMAND } from "../constants/constants.js";

export const commandHandlers = {
  [FILE_MANAGER_COMMAND.UP]: handleUpUserCommand,
  [FILE_MANAGER_COMMAND.CD]: handleCdUserCommand,
  [FILE_MANAGER_COMMAND.LS]: handleLsUserCommand,
  [FILE_MANAGER_COMMAND.CAT]: handleCatUserCommand,
  [FILE_MANAGER_COMMAND.ADD]: handleAddUserCommand,
  [FILE_MANAGER_COMMAND.RN]: handleRnUserCommand,
  [FILE_MANAGER_COMMAND.CP]: handleCpUserCommand,
  [FILE_MANAGER_COMMAND.MV]: handleMvUserCommand,
  [FILE_MANAGER_COMMAND.RM]: handleRmUserCommand,
  [FILE_MANAGER_COMMAND.OS]: handleOsUserCommand,
  [FILE_MANAGER_COMMAND.HASH]: handleHashUserCommand,
  [FILE_MANAGER_COMMAND.COMPRESS]: handleCompressUserCommand,
  [FILE_MANAGER_COMMAND.DECOMPRESS]: handleDecompressUserCommand,
};
