import './layout.css'
import { Outlet } from "react-router-dom"
import Content from './Content'

const Layout = () => {
    return (
        <div className="main-container">
            <Content>
                <Outlet />
            </Content>
        </div>
    )
}

export default Layout