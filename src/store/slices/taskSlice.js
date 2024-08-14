import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const baseURL = 'https://task-manager-app.pockethost.io/api/collections/tasks/records/'

const initialState = {
    items: [],
    totalPages: 1,
    status: 'idle',  // can be idle, pending, success, failed
    error: null
}

const apiCall = async (endpoint, method = 'GET', body = null) => {
    const options = {
        method,
        headers: method !== 'GET' ? { 'Content-Type': 'application/json' } : {},
        body: method !== 'GET' ? JSON.stringify(body) : null
    }

    const response = await fetch(baseURL + endpoint, options)
    const data = await response.json()
    if (data.code) {
        throw new Error('API error: ' + data.message)
    }
    return data
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async ({ page, perPage }) => apiCall(`?page=${page}&perPage=${perPage}`)
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (task) => apiCall('', 'POST', task)
)

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (task) => apiCall(task.id, 'PATCH', task)
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id) => apiCall(id, 'DELETE')
)


export const fetchTaskById = createAsyncThunk(
    'tasks/fetchTaskById',
    async (id) => apiCall(id)
)


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
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
                state.items.unshift(action.payload)
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const { id } = action.payload
                const taskIndex = state.items.findIndex(item => item.id === id)
                state.items[taskIndex] = action.payload
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                const { id } = action.payload
                state.items = state.items.filter(item => item.id !== id)
            })
    }
})

export const selectTasks = state => state.tasks.items
export const selectTotalPages = state => state.tasks.totalPages
export const selectStatus = state => state.tasks.status
export const selectError = state => state.tasks.error

export default taskSlice.reducer