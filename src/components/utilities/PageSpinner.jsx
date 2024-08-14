import Spinner from "./Spinner"

const PageSpinner = () => {
    return (
        <div className="page-spinner">
            <Spinner width={40} height={40} />
            <p>Loading...</p>
        </div>
    )
}

export default PageSpinner