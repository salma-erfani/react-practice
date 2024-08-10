import Header from "../layout/Header"
import FormContent from "../layout/FormContent"
import Button from "../utilities/Button"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import CreateForm from "./CreateForm"
import { useEffect, useState } from "react"
import { useAddTask } from "../../hooks/data/useAddTask"
import { useNavigate } from "react-router-dom"

const CreateTask = () => {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')  // low, medium, high
    const navigate = useNavigate()

    // api
    const { response, loading, error, addTask } = useAddTask()

    const onClick = () => {
        const task = {
            title: title,
            priority: priority,
            isDone: false
        }
        addTask(task)
    }

    useEffect(() => {
        if (response) {
            navigate('/task/list')
        }
    }, [response])

    return (
        <>
            <Header
                titleName="Create Task"
                iconR={<KeyboardArrowRightOutlinedIcon />}
                onClickIconR={() => navigate('/task/list')}
            />
            <CreateForm
                title={title}
                onChangeTitle={e => setTitle(e.target.value)}
                priority={priority}
                onChangePriority={e => setPriority(e.target.value)}
            />
            <Button onClick={onClick}>Create</Button>
        </>
    )
}

export default CreateTask
