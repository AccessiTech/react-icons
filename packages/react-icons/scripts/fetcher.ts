import util from "node:util";
import { execFile as rawExecFile } from "node:child_process";
import fs from "fs";
import path from "path";
import { type IconSetGitSource } from "./_types";
import { icons } from "../src/icons";
import PQueue from "p-queue";
import { task } from "./task";
const execFile = util.promisify(rawExecFile);

interface Context {
  distBaseDir: string;
  iconDir(name: string): string;
}

async function main() {
  const distBaseDir = path.join(__dirname, "../icons");
  const ctx: Context = {
    distBaseDir,
    iconDir(name: string) {
      return path.join(distBaseDir, name);
    },
  };
  await task("@accessitech/react-icons/remove-icons", async () => {
    // rm all icons and mkdir dist
    await fs.promises.rm(distBaseDir, {
      recursive: true,
      force: true,
    });
  });
  await task("@accessitech/react-icons/make-directory", async () => {
    await fs.promises.mkdir(distBaseDir, {
      recursive: true,
    });
  });

  await task("@accessitech/react-icons/clone-icons", async () => {
    const queue = new PQueue({ concurrency: 5 });
    for (const icon of icons) {
      if (!icon.source) {
        continue;
      }
      const { source } = icon;
      queue.add(() => gitCloneIcon(source, ctx));
    }
    await queue.onIdle();
  });
}

async function gitCloneIcon(source: IconSetGitSource, ctx: Context) {
  console.log(
    `start clone icon: ${source.url}/${source.remoteDir}@${source.branch}`
  );
  await execFile(
    "git",
    ["clone", "--filter=tree:0", "--no-checkout", source.url, source.localName],
    {
      cwd: ctx.distBaseDir,
    }
  );

  await execFile(
    "git",
    ["sparse-checkout", "set", "--cone", "--skip-checks", source.remoteDir],
    {
      cwd: ctx.iconDir(source.localName),
    }
  );

  await execFile("git", ["checkout", source.hash], {
    cwd: ctx.iconDir(source.localName),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
