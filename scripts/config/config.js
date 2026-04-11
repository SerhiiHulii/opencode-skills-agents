import {deprecated, reasoning, minContext, isFree, getProviderName, getModelName} from '../helpers/assets.js';

// Custom Providers names
const mapOfProvidersNames = {
    'opencode-go': 'ZEN GO',
    'opencode': 'ZEN',
}
// Custom Models names
const mapOfModelsNames = {
    'nemotron-free': 'Nemotron 3',
}

// Allowed providers with it own rules to select models
export const allowedProviders = {
    "opencode": [ // Free of API usage
        deprecated(),
        reasoning(),
        minContext(200000),
        isFree()
    ],
    "opencode-go": [ // Subscription
        deprecated(),
        reasoning(),
        minContext(200000)
    ]
};

// List of models. Just on can be uncommented
export const OPENCODE_MODEL = [
    // List of providers https://models.dev/
    // Zen models pricing https://opencode.ai/docs/zen/
    "opencode/qwen3.6-plus-free",
    "opencode/big-pickle",
    "opencode/minimax-m2.5",

    "opencode/glm-5",
    "opencode/minimax-m2.7",
    "opencode/minimax-m2.5",
    "opencode/kimi-k2.5",
    "opencode/mimo-v2-pro",
    "opencode/mimo-v2-omni",
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

