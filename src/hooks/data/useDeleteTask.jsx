import useApi from "../useApi"

export const useDeleteTask = () => {
    const { response, loading, error, executeRequest } = useApi()

    const deleteTask = (id) => {
        executeRequest({
            url: `tasks/records/${id}`,
            method: 'DELETE'
        })
    }

    return {
        deleteTask,
        response,
        loading,
        error
    }
}