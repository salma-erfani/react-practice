import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {}
})

export default taskSlice.reducer