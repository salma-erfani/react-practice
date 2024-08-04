import LogoutIcon from '@mui/icons-material/Logout'

const TaskHeader = ({ userName }) => {
    return (
        <header className='header'>
            <button><LogoutIcon /></button>
            <h1>{userName}'s Tasks</h1>
        </header>
    )
}

export default TaskHeader