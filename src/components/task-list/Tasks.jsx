import './tasks.css'
import TaskAddButton from './TaskAddButton'
import TaskList from "./TaskList"
import Header from '../layout/Header'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/userSlice'


const Tasks = () => {
    const navigate = useNavigate()
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        // navigate('/login')
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