import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });
writeFileSync(
  "dist/README.txt",
  "Build artifact for Devin Review automation test project.\n",
);

console.log("build ok");
