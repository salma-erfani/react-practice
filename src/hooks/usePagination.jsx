import { useState } from "react"

export const usePagination = ({ initialPage, pagesNum }) => {
    const [page, setPage] = useState(initialPage)

    const onNextPage = () => {
        setPage(prev => Math.min(pagesNum, prev + 1))
    }

    const onPreviousPage = () => {
        setPage(prev => Math.max(1, prev - 1))
    }

    const onSetPage = (page) => {
        if (page >= 1 && page <= pagesNum) {
            setPage(page)
        }
    }

    return {
        page,
        onNextPage,
        onPreviousPage,
        onSetPage
    }
}