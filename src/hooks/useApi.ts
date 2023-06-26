import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { axiosPoke } from "../services/api";

interface ErrorResponse{
    message: string
}

export default function useApi<T>(endpoint: string){

    const [data, setData] = useState<T| null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorResponse | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(false)
                const response: AxiosResponse <T> = await axiosPoke.get(endpoint)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                    setError({ message: "Error" })
                    setLoading(false)
            }
        }
        fetchData()
    }, [endpoint])

    return { data, loading, error }
} 