import {deprecated, reasoning, minContext, isFree, getProviderName, getModelName} from '../helpers/assets.js';

// Custom Providers names
const mapOfProvidersNames = {
    'opencode-go': 'ZEN GO',
    'opencode': 'ZEN',
}
// Custom Models names
const mapOfModelsNames = {
    'nemotron-3-super-free': 'Nemotron 3',
    'minimax-m2.5-free': 'MiniMax M2.5',
    'gemini-3.1-pro': 'Gemini 3.1 Pro'
}


// Allowed providers with it own rules to select models
export const allowedProviders = {
    "opencode": [ // Free of API usage
        deprecated(),
        reasoning(),
        minContext(200000),
        // isFree(),
        (v) =>  v.family.includes('gemini') || v.cost.input === 0 && v.cost.output === 0
    ],
    "opencode-go": [ // Subscription
        deprecated(),
        reasoning(),
        minContext(200000)
    ],
};

// List of models. Just on can be uncommented
export const OPENCODE_MODEL = [
    // List of providers https://models.dev/
    // Zen models pricing https://opencode.ai/docs/zen/

    // "opencode/qwen3.6-plus-free",
    // "opencode/big-pickle",
    // "opencode/minimax-m2.5",

    // "opencode/gemini-3-flash",
    "opencode/gemini-3.1-pro",
    // "opencode/glm-5",
    // "opencode/minimax-m2.7",
    // "opencode/minimax-m2.5",
    // "opencode/kimi-k2.5",
    // "opencode/mimo-v2-pro",
    // "opencode/mimo-v2-omni",
][0]

export const schemeToReturn = {
    id: 'id',
    name: (data) => getProviderName(data, mapOfProvidersNames),
    models: {
        name: (data) => getModelName(data, mapOfModelsNames),
        id: 'id',
        family: 'family',
        cost: 'cost',
        limit: 'limit',
        modalities: 'modalities',
    }
}

export const modelsToIgnore = [
    // 'glm-5'
]

