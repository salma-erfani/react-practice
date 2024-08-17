const Message = ({ message, show, type }) => {
    return (
        <div
            className={"message "
                + (show ? "show " : "")
                + (type === 'success' ? "success " : "")
                + (type === 'error' ? "error " : "")}>
            <span>{message}</span>
        </div>
    )
}

export default Message