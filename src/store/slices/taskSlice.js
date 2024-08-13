import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"

const baseURL = 'https://task-manager-app.pockethost.io/api/collections'

const initialState = {
    tasks: [],
    status: 'idle',  // can be idle, pending, success, failed
    error: null
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (page, perPage) => {
        const response = await fetch(baseURL + `tasks/records?page=${page}&perPage=${perPage}`)
        return response.data
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (task) => {
        const response = await fetch(baseURL + 'tasks/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        return response.data
    }
)

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (task) => {
        const { id } = task
        const response = await fetch(baseURL + `tasks/records/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        return response.data
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => {
        const response = await fetch(baseURL + `tasks/records/${id}`, {
            method: 'DELETE'
        })
        return response.data
    }
)


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskCreated: {
            reducer(state, action) {  // payload contains title, priority, and isDone
                state.tasks.unshift(action.payload)
            },
            prepare(title, priority, isDone) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        priority,
                        isDone
                    }
                }
            }
        },
        taskUpdated: (state, action) => {
            const { id, title, priority, isDone } = action.payload
            const existingTask = state.tasks.find(item => item.id === id)
            if (existingTask) {
                existingTask.title = title
                existingTask.priority = priority
                existingTask.isDone = isDone
            }
        },
        taskRemoved: (state, action) => {
            const { id } = action.payload
            const taskIndex = state.tasks.findIndex(item => item.id === id)
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'success'
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'unknown error fetching tasks'
            })
            .addCase(createTask.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.status = 'success'
                state.tasks.unshift(action.payload)
            })
            .addCase(createTask.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'unknown error creating task'
            })
            .addCase(updateTask.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.status = 'success'
                const { id } = action.payload
                const taskIndex = state.tasks.findIndex(item => item.id === id)
                state.tasks[taskIndex] = action.payload
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'unknown error updating task'
            })
            .addCase(deleteTask.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'success'
                const { id } = action.payload
                const taskIndex = state.tasks.findIndex(item => item.id === id)
                state.tasks.splice(taskIndex, 1)
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'unknown error deleting task'
            })
    }
})

export default taskSlice.reducer