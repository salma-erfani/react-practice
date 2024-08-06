import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import "./Task02.css"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"

const EditTask = () => {
    return (
        //------------------------------  Edit Task
        <>
            <Header
                titleName="Edit Task #1"
                iconL={<DeleteOutlinedIcon />}
                iconR={<KeyboardArrowRightOutlinedIcon />}
            />
            <Content
                labelTop="name"
                plhTop="Task #1"
                labelBottom="priority"
                plhBottom="High"
            />
            <Footer btnName="Save" />
        </>
    )
}

export default EditTask
