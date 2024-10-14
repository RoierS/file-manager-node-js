import path from "path";

export const handleUpUserCommand = (currentDirectory) => {
  const parentDirectory = path.resolve(currentDirectory, "..");

  return parentDirectory === currentDirectory
    ? currentDirectory
    : parentDirectory;
};
