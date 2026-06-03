import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import stripJsonComments from "strip-json-comments";

import {OPENCODE_MODEL} from "../../src/config.js";
import {writeJson} from "./writeJson.js";

export function createOpenCode(parsedProviders) {
    const exampleFilePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../../src/opencode.jsonc");
    const raw = fs.readFileSync(exampleFilePath, "utf-8");
    console.log(raw)
    const opencode = JSON.parse(stripJsonComments(raw));
    opencode.provider = parsedProviders
    opencode.model = OPENCODE_MODEL

    writeJson("dist/opencode.json", opencode)
}