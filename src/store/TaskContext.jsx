import { createContext, useContext, useReducer } from "react"

const TaskContext = createContext(null)

const initialTasks = []

const reducer = (state, action) => {
    if (action.type === 'add') {
        const task = {
            id: state.length + 1,
            ...action.task
        }
        return [task, ...state]
    }
    else if (action.type === 'remove') {
        return state.filter(item => item.id !== action.taskId)
    }
    else if (action.type === 'edit') {
        let taskIdx = state.findIndex(item => item.id === action.task.id)
        let finalTasks = [...state]
        finalTasks[taskIdx] = { ...action.task }
        return finalTasks
    }
    return initialTasks
}

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(reducer, initialTasks)

    const addTask = (task) => {
        dispatch({ type: 'add', task: task })
    }

    const removeTask = (taskId) => {
        dispatch({ type: 'remove', taskId: taskId })
    }

    const editTask = (task) => {
        dispatch({ type: 'edit', task: task })
    }

    const getTask = (taskId) => {
        return tasks.find(item => item.id === taskId)
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            editTask,
            getTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)