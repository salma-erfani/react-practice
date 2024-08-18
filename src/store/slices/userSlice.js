import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: localStorage.getItem('username') || false,
    username: localStorage.getItem('username') || ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
            state.username = action.payload.username
            localStorage.setItem('username', action.payload.username)
        },
        logout: (state, action) => {
            state.isLoggedIn = false
            state.username = null
            localStorage.removeItem('username')
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer