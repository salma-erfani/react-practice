import { useState } from "react"
import { Link } from "react-router-dom"
import { useUpdateTask } from "../../hooks/data/useUpdateTask"

const TaskListItem = ({ task }) => {
    const [checked, setChecked] = useState(task.isDone)

    const { response, loading, error, updateTask } = useUpdateTask()

    const handleClickCheckbox = () => {
        setChecked(prev => !prev)

        const data = { isDone: !task.isDone }
        updateTask(task.id, data)
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
