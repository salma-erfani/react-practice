import { useTask } from "../../store/TaskContext"
import Pagination from "../utilities/Pagination"
import EmptyTasks from "./EmptyTasks"
import TaskListItem from "./TaskListItem"

const TaskList = () => {
    const { tasks } = useTask()

    return (
        <>
            {tasks.length !== 0 &&
                <div className="list">
                    <ul>
                        {tasks.map(item => <TaskListItem key={item.id} task={item.title} />)}
                    </ul>
                    <Pagination />
                </div>
            }
            {tasks.length === 0 &&
                <EmptyTasks />
            }
        </>
    )
}

export default TaskList