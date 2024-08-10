import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './utilities.css'

const range = (start, end, step = 1) => {
    let output = []
    for (let i = start; i <= end; i += step) {
        output.push(i)
    }
    return output
}

const Pagination = ({ paginationProps }) => {
    const {
        activePage,
        onNextPage,
        onPreviousPage,
        onSetPage,
        pagesNum
    } = paginationProps


    let showPages = []
    const capacity = Math.min(3, pagesNum)
    if (activePage === 1) {
        showPages = range(1, capacity)
    }
    else if (activePage === pagesNum) {
        showPages = range(pagesNum - capacity + 1, pagesNum)
    }
    else {
        showPages = range(activePage - 1, activePage + 1)
    }


    return (
        <div className='pagination-bar'>
            <button
                onClick={onPreviousPage}
                className={'pagination-icon ' + (activePage === 1 ? 'disabled' : '')}
                disabled={activePage === 1}
            >
                <ArrowBackIosNewIcon />
            </button>
            {activePage >= pagesNum - 1 && showPages[0] !== 1 && <span>...</span>}
            {showPages.map(page =>
                <button
                    key={page}
                    onClick={() => onSetPage(page)}
                    className={'pagination-item ' + (activePage === page ? 'active' : '')}
                >
                    {page}
                </button>
            )}
            {activePage < pagesNum - 1 && <span>...</span>}
            <button
                onClick={onNextPage}
                className={'pagination-icon ' + (activePage === pagesNum ? 'disabled' : '')}
                disabled={activePage === pagesNum}
            >
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}

export default Pagination