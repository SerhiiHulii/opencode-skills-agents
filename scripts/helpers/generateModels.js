import {fetchOC} from "./fetchOC.js";
import {allowedProviders} from "../../src/config.js";
import {writeJson} from "./writeJson.js";

fetchOC().then(allProvidersData => {
    writeJson("preview/allProvidersFile.json",  allProvidersData)

    const allowedProvidersData = Object.fromEntries(Object.entries(allProvidersData)
        .filter(([k, _]) => Object.keys(allowedProviders).includes(k)))
    writeJson("preview/allowedProvidersFile.json",  allowedProvidersData)
})