import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import "./Task02.css"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

const TaskManager = () => {
    return (
        //------------------------------  Task Manager
        <>
            <Header titleName="Task Manager" />
            <Content
                labelTop="username"
                plhTop="placeholder"
                labelBottom="password"
                plhBottom="placeholder"
                iconTop={<CancelOutlinedIcon />}
                iconBottom={<VisibilityOutlinedIcon />}
            />
            <Footer btnName="Login" />
        </>
    )
}

export default TaskManager
