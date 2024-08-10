import useApi from "../useApi"

export const useUpdateTask = () => {
    const { response, loading, error, executeRequest } = useApi()

    const updateTask = (id, data) => {
        executeRequest({
            url: `tasks/records/${id}`,
            method: 'PATCH',
            data: data
        })
    }

    return {
        updateTask,
        response,
        loading,
        error
    }
}