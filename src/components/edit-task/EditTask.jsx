import Header from "../layout/Header"
import Button from "../utilities/Button"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetTask } from "../../hooks/data/useGetTask"
import { useUpdateTask } from "../../hooks/data/useUpdateTask"
import EditForm from "./EditForm"

const EditTask = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')  // low, medium, high
    const navigate = useNavigate()

    // api
    const { response: updateResponse, loading: updateLoading, error: updateError, updateTask } = useUpdateTask()
    const { response: getResponse, loading: getLoading, error: getError, getTask } = useGetTask()

    // fetch task
    useEffect(() => {
        getTask(id)
    }, [])

    useEffect(() => {
        if (getResponse) {
            setTitle(getResponse.title)
            setPriority(getResponse.priority)
        }
    }, [getResponse])

    const onClick = () => {
        const task = {
            title: title,
            priority: priority
        }
        updateTask(id, task)
    }

    useEffect(() => {
        if (updateResponse) {
            navigate('/task/list')
        }
    }, [updateResponse])

    return (
        <>
            <Header
                titleName="Edit Task #1"
                iconL={<DeleteOutlinedIcon />}
                iconR={<Link to={"/task/list"}><KeyboardArrowRightOutlinedIcon /></Link>}
            />
            <EditForm
                title={title}
                onChangeTitle={e => setTitle(e.target.value)}
                priority={priority}
                onChangePriority={e => setPriority(e.target.value)}
            />
            <Button onClick={onClick}>Save</Button>
        </>
    )
}

export default EditTask
