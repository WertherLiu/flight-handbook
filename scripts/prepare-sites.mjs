import { copyFile, cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve(".open-next");
const target = resolve("dist");
const server = resolve(target, "server");

await stat(source);
await rm(target, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await copyFile(resolve(source, "worker.js"), resolve(server, "index.js"));

for (const directory of [
  ".build",
  "cache",
  "cloudflare",
  "cloudflare-templates",
  "dynamodb-provider",
  "middleware",
  "server-functions"
]) {
  await cp(resolve(source, directory), resolve(server, directory), { recursive: true });
}

await cp(resolve(source, "assets"), resolve(target, "assets"), { recursive: true });
await mkdir(resolve(target, ".openai"), { recursive: true });
await copyFile(resolve(".openai", "hosting.json"), resolve(target, ".openai", "hosting.json"));
console.log(`Prepared Sites artifact ${source} -> ${target}`);
