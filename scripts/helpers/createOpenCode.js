import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import stripJsonComments from "strip-json-comments";

import {OPENCODE_MODEL} from "../config/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createOpenCode(parsedProviders) {
    const exampleFilePath = path.join(__dirname, "../config/opencode.example.jsonc");
    const raw = fs.readFileSync(exampleFilePath, "utf-8");
    const opencode = JSON.parse(stripJsonComments(raw));
    opencode.provider = parsedProviders
    opencode.model = OPENCODE_MODEL

    const configFilePath = path.join(__dirname, "../../link_data/opencode.json");
    fs.writeFileSync(configFilePath, JSON.stringify(opencode, null, 2), "utf-8");
    // fs.writeFileSync(path.join(__dirname, "../../link_data/api.json"), JSON.stringify(parsedProviders, null, 2), "utf-8");
}