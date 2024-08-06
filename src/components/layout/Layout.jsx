import Container from './Container'
import { Outlet } from "react-router-dom"
import './layout.css'

const Layout = () => {
    return (
        <div className="main-container">
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout