import {allowedProviders, modelsToIgnore, schemeToReturn} from "../../src/config.js";
import {fetchOC} from "./fetchOC.js";

export function formatValidate(data, customFilters, schemeToReturn, modelsToIgnore) {
    const toReturn = {}

    Object.entries(schemeToReturn).forEach(([key, val]) => {
        if (typeof val === 'string') {
            toReturn[key] = data[key]
        } else if (typeof val === 'function') {
            toReturn[key] = val(data)
        } else if (typeof val === 'object') {
            const dataEntries = Object.entries(data[key])
                .filter(([k, _]) => !modelsToIgnore.includes(k))
                .filter(([, v]) => customFilters.map(callback => callback(v)).every(value => value === true))
                .sort()
                .map(([k, v])=> {
                    const newVal =  Object.entries(val).map(([k1, v1]) => [k1, typeof v1 ==='string'? v[k1]: v1(v)])
                    return [
                        k,
                        Object.fromEntries(newVal)
                    ]
                })
            toReturn[key] = Object.fromEntries(dataEntries)
        }
    })

    toReturn.whitelist = Object.keys(toReturn.models)

    return toReturn
}


export async function parse() {
    const providers = await fetchOC();
    return Object.fromEntries(
        Object.entries(providers)
            .filter(([k, _]) => Object.keys(allowedProviders).includes(k))
            .map(([k, v]) => ([k, formatValidate(v, allowedProviders[k], schemeToReturn, modelsToIgnore)]))
            .filter(([_, v]) => (Object.entries(v.models).length > 0))
    )
}