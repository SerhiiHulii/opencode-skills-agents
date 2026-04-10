import fs from "fs";
import { fileURLToPath } from "url";
import stripJsonComments from "strip-json-comments";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../config/opencode.example.jsonc");

const raw = fs.readFileSync(filePath, "utf-8");
const opencode = JSON.parse(stripJsonComments(raw));

// await mkdir('./data', { recursive: true });

// for (const [key, value] of selectedModels) {
//     await writeFile(`./data/${key}.json`, format(value), null, 2);
// }


export function createOpenCode(parsedProviders) {
    opencode.provider = parsedProviders
    console.log(opencode)
    writeFile(`./data/${key}.json`, format(value), null, 2);
    // console.log(parsedProviders)
}