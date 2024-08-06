import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './utilities.css'

const pages = [13, 14, 15, 16, 17]
const activePage = 17

const Pagination = () => {
    return (
        <div className='pagination-bar'>
            <span className='pagination-icon'><ArrowBackIosNewIcon /></span>
            {pages.map(page =>
                <span
                    key={page}
                    className={'pagination-item ' + (activePage === page ? 'active' : '')}
                >
                    {page}
                </span>
            )}
            <span className='pagination-icon'><ArrowForwardIosIcon /></span>
        </div>
    )
}

export default Pagination