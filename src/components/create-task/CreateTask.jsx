import Header from "../layout/Header"
import FormContent from "../layout/FormContent"
import Button from "../utilities/Button"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"

const CreateTask = () => {
    return (
        <>
            <Header
                titleName="Create Task"
                iconR={<KeyboardArrowRightOutlinedIcon />}
            />
            <FormContent
                labelTop="name"
                plhTop="Placeholder"
                labelBottom="priority"
                plhBottom="Placeholder"
            />
            <Button>Create</Button>
        </>
    )
}

export default CreateTask
