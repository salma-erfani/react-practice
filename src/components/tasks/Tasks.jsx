import TaskAddButton from "./TaskAddButton"
import TaskHeader from "./TaskHeader"
import TaskList from "./TaskList"
import './tasks.css'

// uncomment to see normal list
const TASKS = [
    {
        id: 1,
        task: 'Task #1'
    },
    {
        id: 2,
        task: 'Task #2'
    },
    {
        id: 3,
        task: 'Task #3'
    },
]

// uncomment to see pagination
// const TASKS = [
//     {
//         id: 1,
//         task: 'Task #1'
//     },
//     {
//         id: 2,
//         task: 'Task #2'
//     },
//     {
//         id: 3,
//         task: 'Task #3'
//     },
//     {
//         id: 4,
//         task: 'Task #4'
//     },
//     {
//         id: 5,
//         task: 'Task #5'
//     },
//     {
//         id: 6,
//         task: 'Task #6'
//     },
// ]

// uncomment to see empty list
// const TASKS = []

const USER_NAME = 'Jenny'

const Tasks = () => {
    return (
        <div className="main-container">
            <div className="tasks-container">
                <TaskHeader userName={USER_NAME} />
                <TaskList tasks={TASKS} />
            </div>
            <TaskAddButton />
        </div>
    )
}

export default Tasks