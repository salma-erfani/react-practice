const Header = (props) => {
    return (
        <header className="header-form">
            <button className='icon'>{props.iconL}</button>
            <h2>{props.titleName}</h2>
            <button className='icon'>{props.iconR}</button>
        </header>
    )
}

export default Header
