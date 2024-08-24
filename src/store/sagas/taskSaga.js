import api from "../api/api"
import { onStartAction, onActionSuccess, onActionFailed } from "../slices/taskSlice"
import { takeLatest, call, put, all } from "redux-saga/effects"


function* fetchTasks(action) {
    yield put(onStartAction())
    const { page, perPage } = action.payload
    try {
        const { items, totalPages } = yield call(api.fetchTasks, page, perPage)
        yield put(onActionSuccess({ actionType: 'FETCH_LIST', items, totalPages }))
    }
    catch (error) {
        yield put(onActionFailed({ error: error.message }))
    }
}

function* createTask(action) {
    yield put(onStartAction())
    const { task } = action.payload
    try {
        const createdTask = yield call(api.createTask, task)
        yield put({ actionType: 'CREATE_ITEM', task: createdTask })
    }
    catch (error) {
        yield put(onActionFailed({ error: error.message }))
    }
}

function* updateTask(action) {
    yield put(onStartAction())
    const { task } = action.payload
    try {
        const updatedTask = yield call(api.updateTask, task)
        yield put({ actionType: 'UPDATE_ITEM', task: updatedTask })
    }
    catch (error) {
        yield put(onActionFailed({ error: error.message }))
    }
}

function* deleteTask(action) {
    yield put(onStartAction())
    const { id } = action.payload
    try {
        yield call(api.deleteTask, id)
        yield put({ actionType: 'DELETE_ITEM' })
    }
    catch (error) {
        yield put(onActionFailed({ error: error.message }))
    }
}

function* watchTaskActions() {
    yield takeLatest('FETCH_TASKS', fetchTasks)
    yield takeLatest('CREATE_TASK', createTask)
    yield takeLatest('UPDATE_TASK', updateTask)
    yield takeLatest('DELETE_TASK', deleteTask)
}

export default function* rootSaga() {
    yield watchTaskActions()
}
