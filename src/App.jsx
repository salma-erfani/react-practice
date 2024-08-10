import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Tasks from "./components/task-list/Tasks"
import Layout from "./components/layout/Layout"
import Login from "./components/login/Login"
import EditTask from "./components/edit-task/EditTask"
import CreateTask from "./components/create-task/CreateTask"

const App = () => {
    const username = localStorage.getItem('username')

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={username ? <Navigate to='/task/list' replace /> : <Navigate to='/login' replace />} />
                    <Route path="login" element={<Login />} />
                    <Route path="task/list" element={<Tasks />} />
                    <Route path="task/:id/edit" element={<EditTask />} />
                    <Route path="task/create" element={<CreateTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App