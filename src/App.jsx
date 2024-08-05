import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Tasks from "./components/tasks/Tasks"
import Layout from "./components/layout/Layout"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate to='/task/list' replace />} />
					<Route path="task/list" element={<Tasks />} />
					{/* <Route path="task/create" /> */}
					{/* <Route path="task/:id/edit" /> */}
					{/* <Route path="login" /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App