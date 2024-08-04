const TaskListItem = ({ task }) => {
    return (
        <li className="list-item">
            <div className="right">
                <div className="circle"><span>A</span></div>
                <span>{task}</span>
            </div>
            <input type="checkbox" checked />
        </li>
    )
}

export default TaskListItem