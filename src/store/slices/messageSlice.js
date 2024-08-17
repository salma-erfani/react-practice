import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show: false,
    text: '',
    type: '',
    active: false
}

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setMessage: (state, action) => {
            state.text = action.payload.text
            state.type = action.payload.type
            state.show = true
            state.active = true
        },
        setMessageInactive: (state, action) => {
            state.active = false
        },
        resetMessage: (state, action) => {
            state.show = false
            state.active = false
            state.text = ''
            state.type = null
        }
    }
})

export const { setMessage, setMessageInactive, resetMessage } = messageSlice.actions

export const showMessage = (text, type) => (dispatch) => {
    dispatch(setMessage({ text, type }))

    setTimeout(() => {
        dispatch(setMessageInactive())
    }, 4000)

    setTimeout(() => {
        dispatch(resetMessage())
    }, 5000)
}

export default messageSlice.reducer