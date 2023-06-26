import axios from "axios"

export const axiosPoke = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})