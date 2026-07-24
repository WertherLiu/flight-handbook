import { copyFile, cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve(".open-next");
const target = resolve("dist");

await stat(source);
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
await mkdir(resolve(target, "server"), { recursive: true });
await copyFile(resolve(source, "worker.js"), resolve(target, "server", "index.js"));
await mkdir(resolve(target, ".openai"), { recursive: true });
await copyFile(resolve(".openai", "hosting.json"), resolve(target, ".openai", "hosting.json"));
console.log(`Prepared Sites artifact ${source} -> ${target}`);
