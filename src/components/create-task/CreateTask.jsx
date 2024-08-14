import Header from "../layout/Header"
import Button from "../utilities/Button"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import CreateForm from "./CreateForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createTask } from "../../store/slices/taskSlice"
import Spinner from "../utilities/Spinner"

const CreateTask = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle')  // can be pending or idle

    const onClick = async () => {
        const task = {
            title: title,
            priority: priority,
            isDone: false
        }

        setRequestStatus('pending')
        const data = await dispatch(createTask(task)).unwrap()
        if (data.code) {
            console.log('error creating task:', data.message)
        }
        else {
            navigate('/task/list')
        }
        setRequestStatus('idle')
    }

    const buttonContent = requestStatus === 'idle' ? 'Create' : <Spinner />

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
            <Button onClick={onClick}>{buttonContent}</Button>
        </>
    )
}

export default CreateTask
