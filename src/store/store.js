import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './slices/taskSlice'
import messageReducer from './slices/messageSlice'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        message: messageReducer
    }
})

export default store