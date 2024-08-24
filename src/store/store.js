import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './slices/taskSlice'
import messageReducer from './slices/messageSlice'
import userReducer from './slices/userSlice'
import rootSaga from "./sagas/taskSaga"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        message: messageReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store