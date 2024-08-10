import useApi from "../useApi"

export const useDeleteTask = () => {
    const { code, loading, error, executeRequest } = useApi()

    const deleteTask = (id) => {
        executeRequest({
            url: `tasks/records/${id}`,
            method: 'DELETE'
        })
    }

    return {
        deleteTask,
        code,
        loading,
        error
    }
}