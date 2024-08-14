import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"

const baseURL = 'https://task-manager-app.pockethost.io/api/collections/'

const initialState = {
    items: [],
    totalPages: 1,
    status: 'idle',  // can be idle, pending, success, failed
    error: null
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async ({ page, perPage }) => {
        const response = await fetch(baseURL + `tasks/records?page=${page}&perPage=${perPage}`)
        const data = await response.json()
        // check for error
        if (data.code) {
            throw new Error('error fetching tasks: ' + data.message)
        }
        return data
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
        const data = await response.json()
        return data
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
        const data = await response.json()
        return data
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => {
        const response = await fetch(baseURL + `tasks/records/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    }
)


export const fetchTaskById = createAsyncThunk(
    'tasks/fetchTaskById',
    async (id) => {
        const response = await fetch(baseURL + `tasks/records/${id}`)
        const data = await response.json()
        return data
    }
)


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskCreated: {
            reducer(state, action) {  // payload contains title, priority, and isDone
                state.items.unshift(action.payload)
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
            const existingTask = state.items.find(item => item.id === id)
            if (existingTask) {
                existingTask.title = title
                existingTask.priority = priority
                existingTask.isDone = isDone
            }
        },
        taskRemoved: (state, action) => {
            const { id } = action.payload
            const taskIndex = state.items.findIndex(item => item.id === id)
            if (taskIndex !== -1) {
                state.items.splice(taskIndex, 1)
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
                state.items = action.payload.items
                state.totalPages = action.payload.totalPages
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'unknown error fetching tasks'
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.status = 'success'
                state.items.unshift(action.payload)
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.status = 'success'
                const { id } = action.payload
                const taskIndex = state.items.findIndex(item => item.id === id)
                state.items[taskIndex] = action.payload
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = 'success'
                const { id } = action.payload
                const taskIndex = state.items.findIndex(item => item.id === id)
                state.items.splice(taskIndex, 1)
            })
    }
})

export const selectTasks = state => state.tasks.items
export const selectTotalPages = state => state.tasks.totalPages
export const selectStatus = state => state.tasks.status
export const selectError = state => state.tasks.error

export default taskSlice.reducer