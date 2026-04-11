import {fetchOC} from "./helpers/fetchOC.js";
import {parse} from "./helpers/parse.js";
import {createOpenCode} from "./helpers/createOpenCode.js";
import {allowedProviders, modelsToIgnore, schemeToReturn} from "./config/config.js";

const providers = await fetchOC();
const parsedProviders = parse(providers, allowedProviders, schemeToReturn, modelsToIgnore);
createOpenCode(parsedProviders)
