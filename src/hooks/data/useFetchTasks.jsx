import useApi from "../useApi"

export const useFetchTasks = () => {
    const { response, loading, error, executeRequest } = useApi()

    const getTasksByPage = (page, pageSize) => {
        executeRequest({
            url: `tasks/records?page=${page}&perPage=${pageSize}`
        })
    }

    return {
        getTasksByPage,
        response,
        loading,
        error
    }
}