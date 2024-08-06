import { useEffect, useState } from "react"
import { useTask } from "../../store/TaskContext"
import Pagination from "../utilities/Pagination"
import EmptyTasks from "./EmptyTasks"
import TaskListItem from "./TaskListItem"
import { usePagination } from "../../hooks/usePagination"

const TaskList = () => {
    const { getTasksByPage, getNumberOfPages } = useTask()
    const [tasks, setTasks] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(1)
    const pageSize = 3
    const { page, onNextPage, onPreviousPage, onSetPage } = usePagination({ initialPage: 1, pagesNum: numberOfPages })

    const paginationProps = {
        activePage: page,
        pagesNum: numberOfPages,
        onNextPage,
        onPreviousPage,
        onSetPage,
    }

    useEffect(() => {
        setTasks(getTasksByPage(page, pageSize))
    }, [page, pageSize])

    useEffect(() => {
        setNumberOfPages(getNumberOfPages(pageSize))
    }, [pageSize])

    return (
        <>
            {tasks.length !== 0 &&
                <div className="list">
                    <ul>
                        {tasks.map(item => <TaskListItem key={item.id} task={item} />)}
                    </ul>
                    <Pagination paginationProps={paginationProps} />
                </div>
            }
            {tasks.length === 0 &&
                <EmptyTasks />
            }
        </>
    )
}

export default TaskList