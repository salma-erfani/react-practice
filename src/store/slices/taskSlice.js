import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
    totalPages: 1,
    status: 'idle',  // can be idle, pending, success, failed
    error: null
}


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        onStartAction: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        onActionSuccess: (state, action) => {
            const { actionType } = action.payload.actionType
            state.status = 'success'
            state.error = null
            switch (actionType) {
                case 'FETCH_LIST':
                    state.items = action.payload.items
                    state.totalPages = action.payload.totalPages
                    break
                case 'CRAETE_ITEM':
                    state.items.unshift(action.payload.taks)
                    break
                case 'UPDATE_ITEM':
                    const taskIndex = state.items.findIndex(item => item.id === action.payload.id)
                    state.items[taskIndex] = action.payload.task
                    break
                case 'DELETE_ITEM':
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                    break
            }
        },
        onActionFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.error
        }
    }
})

export const { onStartAction, onActionSuccess, onActionFailed } = taskSlice.actions

export const selectTasks = state => state.tasks.items
export const selectTotalPages = state => state.tasks.totalPages
export const selectStatus = state => state.tasks.status
export const selectError = state => state.tasks.error

export default taskSlice.reducer