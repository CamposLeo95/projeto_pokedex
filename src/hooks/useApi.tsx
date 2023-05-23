import { api } from "../api/intarface"
import { useState, useEffect } from "react"

export default function useApi (url){
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    async function fetchData(){
        await api.get(url)
        .then((response) => { setData(response.data) })
    }

    useEffect(() => {
        try {
            fetchData()
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }, [data])   

    return {data, setData, loading}
}