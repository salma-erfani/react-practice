import FilterListIcon from '@mui/icons-material/FilterList'
import IconButton from '../utilities/IconButton'

const TaskFilter = () => {
    return (
        <div className='task-filter'>
            <IconButton>
                <FilterListIcon />
            </IconButton>
        </div>
    )
}

export default TaskFilter