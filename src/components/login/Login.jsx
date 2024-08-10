import Header from "../layout/Header"
import Button from "../utilities/Button"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { useState } from "react"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const passUsername = () => {
        if (username.trim() !== '') {
            localStorage.setItem('username', username.trim())
            navigate('/task/list')
        }
    }



    return (
        <>
            <Header titleName="Task Manager" />
            <LoginForm
                username={username}
                setUsername={setUsername}
                labelTop="username"
                plhTop="placeholder"
                labelBottom="password"
                plhBottom="placeholder"
                iconTop={<CancelOutlinedIcon />}
                iconBottom={<VisibilityOutlinedIcon />}
            />
            <Button onClick={passUsername}>Login</Button>
        </>
    )
}

export default Login
