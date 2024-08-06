import Header from "../layout/Header"
import FormContent from "../layout/FormContent"
import Button from "../utilities/Button"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import { Link } from "react-router-dom"

const EditTask = () => {
    return (
        <>
            <Header
                titleName="Edit Task #1"
                iconL={<DeleteOutlinedIcon />}
                iconR={<Link to={"/task/list"}><KeyboardArrowRightOutlinedIcon /></Link>}
            />
            <FormContent
                labelTop="name"
                plhTop="Task #1"
                labelBottom="priority"
                plhBottom="High"
            />
            <Button>Save</Button>
        </>
    )
}

export default EditTask
