import { createContext, useContext, useReducer } from "react"

const TaskContext = createContext(null)

const initialTasks = [
    { id: 1, title: 'task', priority: 'high', isDone: false },
    { id: 2, title: 'task', priority: 'high', isDone: false },
    { id: 3, title: 'task', priority: 'high', isDone: false },
    { id: 4, title: 'task2', priority: 'high', isDone: false },
    { id: 5, title: 'task2', priority: 'high', isDone: false },
    { id: 6, title: 'task', priority: 'high', isDone: false },
    { id: 7, title: 'task', priority: 'high', isDone: false },
    { id: 8, title: 'task', priority: 'high', isDone: false },
    { id: 9, title: 'task2', priority: 'high', isDone: false },
    { id: 10, title: 'task2', priority: 'high', isDone: false },
    { id: 11, title: 'task', priority: 'high', isDone: false },
    { id: 81, title: 'task', priority: 'high', isDone: false },
    { id: 91, title: 'task2', priority: 'high', isDone: false },
    { id: 101, title: 'task2', priority: 'high', isDone: false },
]

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
    else if (action.type === 'toggle-status') {
        let taskIdx = state.findIndex(item => item.id === action.taskId)
        const modifiedTask = { ...state[taskIdx], isDone: !state[taskIdx].isDone }
        let finalTasks = [...state]
        finalTasks[taskIdx] = modifiedTask
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

    const toggleTaskStatus = (taskId) => {
        dispatch({ type: 'toggle-status', taskId: taskId })
    }

    const getTask = (taskId) => {
        return tasks.find(item => item.id === taskId)
    }

    const getTasksByPage = (page, pageSize) => {
        const start = (page - 1) * pageSize
        return tasks.slice(start, start + pageSize)
    }

    const getNumberOfPages = (pageSize) => {
        return Math.floor(tasks.length / pageSize) + 1
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            editTask,
            toggleTaskStatus,
            getTask,
            getTasksByPage,
            getNumberOfPages
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)