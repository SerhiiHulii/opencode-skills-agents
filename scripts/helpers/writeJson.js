import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function writeJson(filaPath, data) {
    const fullFilaPath = path.join(__dirname, `../../${filaPath}`);
    fs.writeFileSync(fullFilaPath, JSON.stringify(data, null, 2), "utf-8");
}