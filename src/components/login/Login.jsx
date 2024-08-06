import Header from "../layout/Header"
import FormContent from "../layout/FormContent"
import Button from "../utilities/Button"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

const Login = () => {
    return (
        <>
            <Header titleName="Task Manager" />
            <FormContent
                labelTop="username"
                plhTop="placeholder"
                labelBottom="password"
                plhBottom="placeholder"
                iconTop={<CancelOutlinedIcon />}
                iconBottom={<VisibilityOutlinedIcon />}
            />
            <Button>Login</Button>
        </>
    )
}

export default Login
