import {parse} from "./helpers/parse.js";
import {createOpenCode} from "./helpers/createOpenCode.js";

parse().then(parsedProviders=> createOpenCode(parsedProviders))

