import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Lost Sock Status Update — one line, written to /output/entry.txt.
const LINE =
  "Day 12 behind the dryer: I have eloped with a single earring. We are happy. Please stop opening the drawer to check.";

function outputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  const flag = process.argv.indexOf("--output");
  if (flag !== -1 && process.argv[flag + 1]) return process.argv[flag + 1];
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
