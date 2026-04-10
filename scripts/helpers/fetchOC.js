import axios from "axios";


export async function fetchOC(){
    try {
        return (await axios.get('https://models.dev/api.json')).data;
    } catch (error) {
        console.error(error);
    }
}