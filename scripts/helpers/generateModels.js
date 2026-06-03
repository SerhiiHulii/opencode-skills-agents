import {fetchOC} from "./fetchOC.js";
import {allowedProviders, modelsToIgnore, schemeToReturn} from "../../src/config.js";
import {formatValidate} from "./parse.js";
import {writeJson} from "./writeJson.js";

fetchOC().then(allProvidersData => {
    writeJson("preview/allProvidersFile.json",  allProvidersData)

    const allowedProvidersData = Object.fromEntries(Object.entries(allProvidersData)
        .filter(([k, _]) => Object.keys(allowedProviders).includes(k)))
    writeJson("preview/allowedProvidersFile.json",  allowedProvidersData)

    // const ааа = Object.fromEntries(
    //     Object.entries(allProvidersData)
    //         .filter(([k, _]) => Object.keys(allowedProviders).includes(k))
    //         .map(([k, v]) => ([k, formatValidate(v, allowedProviders[k], schemeToReturn, modelsToIgnore)]))
    //         .filter(([_, v]) => (Object.entries(v.models).length > 0))
    // )
    // console.log(ааа)
})