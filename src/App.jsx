import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Tasks from "./components/tasks/Tasks"
import Task02 from "./components/tasks-2/Task02"
import TaskManager from "./components/tasks-2/TaskManager"
import EditTask from "./components/tasks-2/EditTask"
import CreateTask from "./components/tasks-2/CreateTask"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to='/task/list' replace />} />
                    <Route path="task/list" element={<Tasks />} />
                    <Route path="task/taskmanager" element={<TaskManager />} />
                    <Route path="task/edittask" element={<EditTask />} />
                    <Route path="task/createtask" element={<CreateTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App