export const getUserName = () => {
  const args = process.argv.slice(2);

  const userName =
    args.find((arg) => arg.startsWith("--username="))?.split("=")[1] ??
    "Anonymous User";

  return userName;
};
