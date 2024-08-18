import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './slices/taskSlice'
import messageReducer from './slices/messageSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        message: messageReducer,
        user: userReducer
    }
})

export default store