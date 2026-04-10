function formatValidate(data, customFilters, schemeToReturn, modelsToIgnore) {
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
                .map(([k, v])=> ([k, Object.fromEntries(val.map(j => [j, v[j]]))]))
            toReturn[key] = Object.fromEntries(dataEntries)
        }
    })

    toReturn.whitelist = Object.keys(toReturn.models)

    return toReturn
}


export function parse(data, allowedProviders, schemeToReturn, modelsToIgnore) {
    return Object.fromEntries(
        Object.entries(data)
            .filter(([k, _]) => Object.keys(allowedProviders).includes(k))
            .map(([k, v]) => ([k, formatValidate(v, allowedProviders[k], schemeToReturn, modelsToIgnore)]))
            .filter(([_, v]) => (Object.entries(v.models).length > 0))
    )
}