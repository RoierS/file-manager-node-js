import { readdir } from "fs/promises";
import { OPERATION_FAILED_MESSAGE } from "../constants/constants.js";

export const handleLsUserCommand = async (currentDirectory) => {
  try {
    const readedItems = await readdir(currentDirectory, {
      withFileTypes: true,
    });

    const { files, folders } = readedItems.reduce(
      (acc, currItem) => {
        if (currItem.isFile()) {
          acc.files.push({ name: currItem.name, type: "File" });
        } else if (currItem.isDirectory()) {
          acc.folders.push({ name: currItem.name, type: "Folder" });
        }

        return acc;
      },
      {
        files: [],
        folders: [],
      },
    );

    folders.sort((a, b) => a.name.localeCompare(b.name));
    files.sort((a, b) => a.name.localeCompare(b.name));

    console.table([...folders, ...files], ["name", "type"]);
  } catch (error) {
    console.error(OPERATION_FAILED_MESSAGE, error);
  }

  return currentDirectory;
};
