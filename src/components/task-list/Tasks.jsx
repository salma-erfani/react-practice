import './tasks.css'
import TaskAddButton from './TaskAddButton'
import TaskList from "./TaskList"
import Header from '../layout/Header'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'


const Tasks = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username')

    const handleLogout = () => {
        localStorage.removeItem('username')
        navigate('/login')
    }

    return (
        <>
            <Header titleName={`${username}'s Tasks`} iconL={<LogoutIcon />} onClickIconL={handleLogout} />
            <TaskList />
            <TaskAddButton />
        </>
    )
}

export default Tasks