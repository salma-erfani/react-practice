const Header = (props) => {
    return (
        <header className="header">
            <button onClick={props.onClickIconL} className='icon'>{props.iconL}</button>
            <h2>{props.titleName}</h2>
            <button onClick={props.onClickIconR} className='icon'>{props.iconR}</button>
        </header>
    )
}

export default Header
