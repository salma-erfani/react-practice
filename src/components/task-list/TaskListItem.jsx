import { useState } from "react"
import { Link } from "react-router-dom"
import { useTask } from "../../store/TaskContext"

const TaskListItem = ({ task }) => {
    const [checked, setChecked] = useState(task.isDone)
    const { toggleTaskStatus } = useTask()

    const handleClickCheckbox = () => {
        setChecked(prev => !prev)
        toggleTaskStatus(task.id)
    }

    return (
        <li className="list-item">
            <Link to={`/task/${task.id}/edit`}>
                <div className="right">
                    <div className="circle">
                        <span>A</span>
                    </div>
                    <span>{task.title}</span>
                </div>
            </Link>
            <input type="checkbox" checked={checked} onChange={handleClickCheckbox} />
        </li>
    )
}

export default TaskListItem
