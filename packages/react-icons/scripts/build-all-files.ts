import { icons } from "../src/icons";
import { task } from "./task";
import * as taskCommon from "./task_common";
import * as taskFiles from "./task_files";
import { filesOpt, nameSpace } from "./_settings";

async function main() {
  try {
    // @accessitech/react-icons/all-files
    await task("@accessitech/react-icons/all-files/build:init", async () => {
      await taskFiles.dirInit(filesOpt);
      await taskCommon.writeEntryPoints(filesOpt);
      await taskCommon.writeIconsManifest(filesOpt);
      await taskCommon.writeLicense(filesOpt);
      await taskCommon.writePackageJson({ name: nameSpace }, filesOpt);
      await taskCommon.copyReadme(filesOpt);
    });
    await task("@accessitech/react-icons/all-files/build:icons", async () => {
      for (const icon of icons) {
        await taskFiles.writeIconModuleFiles(icon, filesOpt);
      }
    });

    await task("@accessitech/react-icons/all-files/build:lib", async () => {
      await taskCommon.copyLib(filesOpt);
    });

    // write to VERSIONS file
    await task(
      "@accessitech/react-icons/all-files/build:versions",
      async () => {
        await taskCommon.writeIconVersions(filesOpt);
      }
    );

    console.log("done");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();

export {};
