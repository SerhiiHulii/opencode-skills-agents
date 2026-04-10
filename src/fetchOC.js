import axios from "axios";
import { mkdir } from "fs/promises";


function format(data, customFilters) {
    let { id, name, doc, models } = data
    models = Object.fromEntries(Object.entries(models)
        .filter(([, v]) => {
            const calledValidations = customFilters.map(callback => callback(v));
            return calledValidations.every(value => value === true)
        })
        .sort()
        // .map(([k, v])=> ([k, {
        //     id: v.id,
        //     name: v.name,
        //     status: v.status
        // }]))
    )
    return { id, name, doc, models }
    // return JSON.stringify({ id, name, doc, models })
}

export async function run(allowedProviders, customFilters){
    try {
        const data = (await axios.get('https://models.dev/api.json')).data;
        return Object.entries(data)
            .filter(e => allowedProviders.includes(e[0]))
            .map(([k, v]) => ([k, format(v, customFilters)]))
    } catch (error) {
        console.error(error);
    }
}

// await mkdir('./data', { recursive: true });

// for (const [key, value] of selectedModels) {
//     await writeFile(`./data/${key}.json`, format(value), null, 2);
// }