import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { updateTask } from "../../store/slices/taskSlice"


const TaskListItem = ({ task }) => {
    const [checked, setChecked] = useState(task.isDone)
    const dispatch = useDispatch()

    const handleClickCheckbox = async () => {
        setChecked(prev => !prev)
        const updatedTask = { id: task.id, isDone: !task.isDone }

        const data = await dispatch(updateTask(updatedTask)).unwrap()
        if (data.code) {
            console.log('error updating task:', data.message)
        }
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
