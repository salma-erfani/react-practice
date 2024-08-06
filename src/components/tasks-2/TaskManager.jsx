import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./Task02.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const TaskManager = () => {
  return (
    //------------------------------  Task Manager
    <div className="box-container">
      <form className="form-wrap">
        <Header titleName="Task Manager" />
        <Content
          labelTop="username"
          plhTop="Tasplaceholder"
          labelBottom="password"
          plhBottom="placeholder"
          iconTop={<CancelOutlinedIcon />}
          iconBottom={<VisibilityOutlinedIcon />}
        />
        <Footer btnName="Login" />
      </form>
    </div>
  );
};

export default TaskManager;
