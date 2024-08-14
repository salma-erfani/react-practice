import { useEffect } from "react"
import Pagination from "../utilities/Pagination"
import EmptyTasks from "./EmptyTasks"
import TaskListItem from "./TaskListItem"
import { usePagination } from "../../hooks/usePagination"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks, selectError, selectStatus, selectTasks, selectTotalPages } from "../../store/slices/taskSlice"
import PageSpinner from "../utilities/PageSpinner"

const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    const status = useSelector(selectStatus)
    const totalPages = useSelector(selectTotalPages)
    const error = useSelector(selectError)

    // pagination
    const pageSize = 3
    const { page, onNextPage, onPreviousPage, onSetPage } = usePagination({ initialPage: 1, pagesNum: totalPages })

    const paginationProps = {
        activePage: page,
        pagesNum: totalPages,
        onNextPage,
        onPreviousPage,
        onSetPage,
    }

    useEffect(() => {
        dispatch(fetchTasks({ page, perPage: pageSize }))
    }, [page, pageSize])

    let content = ''

    if (status === 'pending') {
        content = <PageSpinner />
    }

    else if (status === 'success') {
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

    else if (status === 'failed') {
        content = <p>Error: {error}</p>
    }

    return content
}

export default TaskList