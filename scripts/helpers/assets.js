export const deprecated = () => (v) => v.status !== 'deprecated'
export const reasoning = () => (v) => v.reasoning === true
export const minContext = (limit) => (v) =>  v.limit.context >= limit
export const isFree = () => (v) =>  v.cost.input === 0 && v.cost.output === 0

export const getProviderName = (data, mapOfProvidersNames) => {
    try {
        return mapOfProvidersNames[data.id]
    } catch {
        return data.name
    }
}

export const getModelName = (data, mapOfModelsNames) => {
    const newName = mapOfModelsNames[data.id] || data.name
    try {
        const limitContext = (data?.limit?.context/1000000).toFixed(3)
        const outputContext = (data?.limit?.output/1000000).toFixed(3)
        return `CON: ${limitContext}MT | OUT: ${outputContext}MT | ${newName}`
    } catch {
        return newName
    }
}