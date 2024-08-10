import useApi from "../useApi"

export const useGetTask = () => {
    const { response, loading, error, executeRequest } = useApi()

    const getTask = (id) => {
        executeRequest({
            url: `tasks/records/${id}`
        })
    }

    return {
        getTask,
        response,
        loading,
        error
    }
}