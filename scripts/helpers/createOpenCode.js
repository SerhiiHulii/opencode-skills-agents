import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import stripJsonComments from "strip-json-comments";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createOpenCode(parsedProviders) {
    const exampleFilePath = path.join(__dirname, "../config/opencode.example.jsonc");
    const raw = fs.readFileSync(exampleFilePath, "utf-8");
    const opencode = JSON.parse(stripJsonComments(raw));
    opencode.provider = parsedProviders

    const configFilePath = path.join(__dirname, "../../link_data/opencode.json");
    fs.writeFileSync(filePath, JSON.stringify(opencode, null, 2), "utf-8");
}