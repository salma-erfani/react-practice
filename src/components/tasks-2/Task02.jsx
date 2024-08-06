import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./Task02.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Task02 = () => {
  return (
    
    //------------------------------  Task Manager
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

    //------------------------------  Edit Task
    // <form className="form-wrap">
    //   <Header
    //     titleName="Edit Task #1"
    //     iconL={<DeleteOutlinedIcon />}
    //     iconR={<KeyboardArrowRightOutlinedIcon />}
    //   />
    //   <Content
    //     labelTop="name"
    //     plhTop="Task #1"
    //     labelBottom="priority"
    //     plhBottom="High"
    //   />
    //   <Footer btnName="Save" />
    // </form>

    //------------------------------  Create Task
//     <form className="form-wrap">
//     <Header
//       titleName="Create Task"
//       iconR={<KeyboardArrowRightOutlinedIcon />}
//     />
//     <Content
//       labelTop="name"
//       plhTop="Placeholder"
//       labelBottom="priority"
//       plhBottom="Placeholder"
//     />
//     <Footer btnName="Create" />
//   </form>
  );
};

export default Task02;
