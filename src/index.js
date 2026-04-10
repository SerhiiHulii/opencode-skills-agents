import { run } from "./fetchOC.js";

const allowedProviders = [
    "opencode",   // Free of API usage
    "opencode-go" // Subscription
];

const customFilters = [
    (v) => v.status !== 'deprecated',
    (v) => v.reasoning === true,
    (v) => v.limit.context > 200000
]

const providers = await run(allowedProviders, customFilters);
console.log(providers[1][0])
console.log(Object.keys(providers[1][1].models))
console.log(providers[1][1].models)
