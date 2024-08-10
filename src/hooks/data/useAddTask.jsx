import useApi from "../useApi"

export const useAddTask = () => {
    const { response, loading, error, executeRequest } = useApi()

    const addTask = (task) => {
        executeRequest({
            url: 'tasks/records',
            method: 'POST',
            data: { 
                title: task.title,
                isDone: false,
                priority: task.priority
            }
        })
    }

    return {
        addTask,
        response,
        loading,
        error
    }
}