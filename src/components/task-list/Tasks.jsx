import './tasks.css'
import TaskAddButton from './TaskAddButton'
import TaskList from "./TaskList"
import Header from '../layout/Header'
import LogoutIcon from '@mui/icons-material/Logout'

const USER_NAME = 'Jenny'

const Tasks = () => {
    return (
        <>
            <Header titleName={`${USER_NAME}'s Tasks`} iconL={<LogoutIcon />} />
            <TaskList />
            <TaskAddButton />
        </>
    )
}

export default Tasks