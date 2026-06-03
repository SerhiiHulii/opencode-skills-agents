import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import stripJsonComments from "strip-json-comments";

import {parse} from "./helpers/parse.js";
import {writeJson} from "./helpers/writeJson.js";
import {OPENCODE_MODEL} from "../src/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getJsonData(pathToFile) {
    const jsonPath = path.join(__dirname, pathToFile);
    const jsonContent = fs.readFileSync(jsonPath, "utf-8")
    return JSON.parse(stripJsonComments(jsonContent));
}

parse().then(parsedProviders=> {
    const opencodeObject = getJsonData("../src/opencode.jsonc");
    const lsp = getJsonData("../src/lsp.jsonc").lsp;
    const mcp = getJsonData("../src/mcp.jsonc").mcp;
    const permission = getJsonData("../src/permission.jsonc").permission;

    opencodeObject.model = OPENCODE_MODEL
    opencodeObject.provider = parsedProviders

    opencodeObject.lsp = lsp
    opencodeObject.mcp = mcp
    opencodeObject.permission = permission
    opencodeObject.enabled_providers = Object.keys(parsedProviders)

    writeJson("dist/opencode.json", opencodeObject)
})

