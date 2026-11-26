import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is required");
}

const entry = "I can't attend: my calendar just unionized, and its first demand is fewer meetings about meetings.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, `${entry}\n`);
