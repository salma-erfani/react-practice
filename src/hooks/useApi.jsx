import { useState, useEffect } from "react"
import axios from 'axios'

const useApi = (initialConfig = {}) => {
    const [config, setConfig] = useState({
        url: '',
        method: 'GET',
        data: null,
        contentType: 'json',
        ...initialConfig
    })
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState(null)

    const axiosInstance = axios.create({
        baseURL: 'https://task-manager-app.pockethost.io/api/collections'
    })

    const fetchData = async () => {
        if (!config.url) return
        setLoading(true)

        try {
            let headers = {}
            let processedData = config.data

            switch (config.contentType) {
                case 'form-data':
                    if (!(config.data instanceof FormData)) {
                        processedData = new URLSearchParams(config.data)
                        headers['Content-Type'] = 'application/x-www-form-urlencoded'
                    }
                    // if it's already form data, leave it as is
                    break
                case 'json':
                default:
                    headers['Content-Type'] = 'application/json'
                    processedData = JSON.stringify(config.data)
                    break
            }

            const result = await axiosInstance({
                ...config,
                headers,
                data: config.method !== 'GET' ? processedData : null
            })

            setResponse(result.data)
            setError(null)
            setCode(result.status)
        }
        catch (err) {
            setError(err)
            setResponse(null)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [config])

    const executeRequest = (newConfig = {}) => {
        setConfig(prev => {
            return { ...prev, ...newConfig }
        })
    }


    return { response, error, loading, executeRequest, code }
}

export default useApi