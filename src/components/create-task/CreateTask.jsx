import Header from "../layout/Header"
import Button from "../utilities/Button"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import CreateForm from "./CreateForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../utilities/Spinner"
import { showMessage } from "../../store/slices/messageSlice"
import { selectError, selectStatus } from "../../store/slices/taskSlice"

const CreateTask = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)

    const onClick = async () => {
        if (title.trim() === '' || priority === '') {
            dispatch(showMessage('Please fill in all the fields.', 'error'))
            return
        }
        const task = {
            title: title,
            priority: priority,
            isDone: false
        }

        setIsLoading(true)
        const data = await dispatch({ type: 'CREATE_TASK', payload: { task } }).unwrap()
        if (data.code) {
            dispatch(showMessage('There was an error creating your task.', 'error'))
        }
        else {
            dispatch(showMessage('Your task was created successfully.', 'success'))
            navigate('/task/list')
        }
        setIsLoading(false)
    }

    const buttonContent = !isLoading ? 'Create' : <Spinner />

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
