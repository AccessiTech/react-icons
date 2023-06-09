import path from "path";

export const _rootDir = path.resolve(__dirname, "../");

export const allOpt = {
  rootDir: _rootDir,
  DIST: path.resolve(_rootDir, "../_react-icons_all"),
  LIB: path.resolve(_rootDir, "../_react-icons_all/lib"),
};

export const filesOpt = {
  rootDir: _rootDir,
  DIST: path.resolve(_rootDir, "../_react-icons_all-files"),
  LIB: path.resolve(_rootDir, "../_react-icons_all-files/lib"),
};

export const nameSpace = "@accessitech/react-icons";
