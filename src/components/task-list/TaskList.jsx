import Pagination from "../utilities/Pagination"
import EmptyTasks from "./EmptyTasks"
import TaskListItem from "./TaskListItem"

const TaskList = ({ tasks }) => {
    return (
        <>
            {tasks.length !== 0 &&
                <div className="list">
                    <ul>
                        {tasks.map(item => <TaskListItem key={item.id} task={item.task} />)}
                    </ul>
                    {tasks.length >= 6 && <Pagination />}
                </div>
            }
            {tasks.length === 0 && 
                <EmptyTasks />
            }
        </>
    )
}

export default TaskList