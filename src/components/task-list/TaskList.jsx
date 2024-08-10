import { useEffect, useState } from "react"
import Pagination from "../utilities/Pagination"
import EmptyTasks from "./EmptyTasks"
import TaskListItem from "./TaskListItem"
import { usePagination } from "../../hooks/usePagination"
import { useFetchTasks } from "../../hooks/data/useFetchTasks"

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const { response, loading, error, getTasksByPage } = useFetchTasks()

    // pagination
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
        getTasksByPage(page, pageSize)
    }, [page])

    useEffect(() => {
        if (response) {
            setTasks(response.items)
            setNumberOfPages(response.totalPages)
        }
    }, [response])

    let content = ''

    if (loading) {
        return <p>loading...</p>
    }

    else if (tasks) {
        content = (
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

    return content
}

export default TaskList