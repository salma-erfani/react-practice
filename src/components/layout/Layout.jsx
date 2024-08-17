import Container from './Container'
import { Outlet } from "react-router-dom"
import './layout.css'
import Message from '../utilities/Message'
import { useSelector } from 'react-redux'

const Layout = () => {
    const message = useSelector(state => state.message)

    return (
        <div className="main-container">
            <Container>
                <Outlet />
            </Container>
            {message.show &&
                <Message
                    message={message.text}
                    type={message.type}
                    show={message.show}
                />
            }
        </div>
    )
}

export default Layout