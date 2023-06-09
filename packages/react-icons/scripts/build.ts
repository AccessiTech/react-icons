import { icons } from "../src/icons";
import { task } from "./task";
import * as taskCommon from "./task_common";
import * as taskAll from "./task_all";
import { allOpt, filesOpt, nameSpace } from "./_settings";

async function main() {
  try {
    // @accessitech/react-icons/all
    await task("@accessitech/react-icons/build:init", async () => {
      await taskAll.dirInit(allOpt);
      await taskCommon.writeEntryPoints(allOpt);
      await taskCommon.writeIconsManifest(allOpt);
      await taskCommon.writeLicense(allOpt);
      await taskCommon.writePackageJson({ name: nameSpace }, allOpt);
      await taskCommon.copyReadme(allOpt);
    });

    // write to d.ts files
    await task("@accessitech/react-icons/build:lib", async () => {
      await taskCommon.buildLib(filesOpt);
      await taskCommon.copyLib(allOpt);
    });

    // write to VERSIONS file
    await task(
      "@accessitech/react-icons/all-files/build:versions",
      async () => {
        await taskCommon.writeIconVersions(filesOpt);
      }
    );

    await task("@accessitech/react-icons/build:icons", async () => {
      for (const icon of icons) {
        await taskAll.writeIconModule(icon, allOpt);
      }
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();

export {};
