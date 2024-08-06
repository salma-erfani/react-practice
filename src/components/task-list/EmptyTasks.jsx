import FileCopyIcon from '@mui/icons-material/FileCopy'

const EmptyTasks = () => {
    return (
        <div className="empty-tasks">
            <div className="empty-icon">
                <FileCopyIcon fontSize='70px' />
            </div>
            <p>Start with create a task</p>
        </div>
    )
}

export default EmptyTasks