import useApi from "../useApi"

export const useAddTask = () => {
    const { response, loading, error, executeRequest } = useApi()

    const addTask = (task) => {
        executeRequest({
            url: 'tasks/records',
            method: 'POST',
            data: task
        })
    }

    return {
        addTask,
        response,
        loading,
        error
    }
}