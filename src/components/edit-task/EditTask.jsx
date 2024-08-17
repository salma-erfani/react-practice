import Header from "../layout/Header"
import Button from "../utilities/Button"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import EditForm from "./EditForm"
import { useDispatch } from "react-redux"
import { deleteTask, fetchTaskById, updateTask } from "../../store/slices/taskSlice"
import Spinner from "../utilities/Spinner"
import PageSpinner from "../utilities/PageSpinner"
import { showMessage } from "../../store/slices/messageSlice"

const EditTask = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')  // low, medium, high

    const dispatch = useDispatch()
    const [fetchStatus, setFetchStatus] = useState('idle')  // can be pending, success, failed
    const [fetchError, setFetchError] = useState(null)
    const [isUpdating, setIsUpdating] = useState(false) 
    const [isDeleting, setIsDeleting] = useState(false) 


    useEffect(() => {
        const fetchTask = async () => {
            setFetchStatus(true)
            const data = await dispatch(fetchTaskById(id)).unwrap()
            if (data.code) {
                setFetchStatus('failed')
                setFetchError(data.message)
            }
            else {
                setTitle(data.title)
                setPriority(data.priority)
                setTask(data)
                setFetchStatus('success')
            }
        }

        fetchTask()
    }, [])

    const onClick = async () => {
        if (title.trim() === '' || priority === '') {
            dispatch(showMessage('Please fill in all the fields.', 'error'))
            return
        }

        let updatedTask = { id }
        if (title !== task.title) {
            updatedTask = { ...updatedTask, title }
        }
        if (priority !== task.priority) {
            updatedTask = { ...updatedTask, priority }
        }

        setIsUpdating(true)
        try {
            const data = await dispatch(updateTask(updatedTask)).unwrap()
            if (data.code) {
                throw new Error("something went wrong.")
            }
            dispatch(showMessage('Your task was updated successfully.', 'success'))
            navigate('/task/list')
        }
        catch (e) {
            dispatch(showMessage('There was an error updating your task.', 'error'))
        }
        finally {
            setIsUpdating(false)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true)
        const data = await dispatch(deleteTask(id)).unwrap()
        if (data.code) {
            dispatch(showMessage('There was an error deleting your task.', 'error'))
        }
        else {
            dispatch(showMessage('Your task was deleted successfully.', 'success'))
            navigate('/task/list')
        }
        setIsDeleting(false)
    }


    const saveButtonContent = !isUpdating ? 'Save' : <Spinner />
    const deleteButtonContent = !isDeleting ? <DeleteOutlinedIcon /> : <Spinner />

    let content = ''

    if (fetchStatus === true) {
        content = <PageSpinner />
    }

    else if (fetchStatus === 'success') {
        content = (
            <>
                <Header
                    titleName={`Edit ${title}`}
                    iconL={deleteButtonContent}
                    onClickIconL={handleDelete}
                    iconR={<Link to={"/task/list"}><KeyboardArrowRightOutlinedIcon /></Link>}
                />
                <EditForm
                    title={title}
                    onChangeTitle={e => setTitle(e.target.value)}
                    priority={priority}
                    onChangePriority={e => setPriority(e.target.value)}
                />
                <Button onClick={onClick}>{saveButtonContent}</Button>
            </>
        )
    }

    else if (fetchStatus === 'failed') {
        content = <p>Error: {fetchError}</p>
    }

    return content
}

export default EditTask
