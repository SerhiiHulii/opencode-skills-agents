import {fetchOC} from "./helpers/fetchOC.js";
import {parse} from "./helpers/parse.js";
import {createOpenCode} from "./helpers/createOpenCode.js";

const deprecated = () => (v) => v.status !== 'deprecated'
const reasoning = () => (v) => v.reasoning === true
const minContext = (limit) => (v) =>  v.limit.context >= limit

const allowedProviders = {
    // Free of API usage
    "opencode": [
        deprecated(),
        reasoning(),
        minContext(200000)
    ],
    // Subscription
    "opencode-go": [
        deprecated(),
        reasoning(),
        minContext(200000)
    ]
};

const mapOfProvidersNames = {
    'opencode-go': 'ZEN GO',
    'opencode': 'ZEN',
}

const schemeToReturn = {
    'id': 'id',
    'name': (data) => mapOfProvidersNames[data.id],
    'models': ['id','name','family','cost','limit','modalities']
}

const modelsToIgnore = [
    // 'glm-5'
]


const providers = await fetchOC();
const parsedProviders = parse(providers, allowedProviders, schemeToReturn, modelsToIgnore);
createOpenCode(parsedProviders)
