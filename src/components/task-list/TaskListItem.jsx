import { Link } from "react-router-dom"

const TaskListItem = ({ task }) => {
    return (
        <Link to={`/task/${task.id}/edit`}>
            <li className="list-item">
                <div className="right">
                    <div className="circle">
                        <span>A</span>
                    </div>
                    <span>{task.title}</span>
                </div>
                <input type="checkbox" checked />
            </li>
        </Link>
    )
}

export default TaskListItem
