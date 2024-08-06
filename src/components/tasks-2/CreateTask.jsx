import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./Task02.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const CreateTask = () => {
  return (
    //------------------------------  Create Task
<>
        <Header
          titleName="Create Task"
          iconR={<KeyboardArrowRightOutlinedIcon />}
        />
        <Content
          labelTop="name"
          plhTop="Placeholder"
          labelBottom="priority"
          plhBottom="Placeholder"
        />
        <Footer btnName="Create" />
      </>
  );
};

export default CreateTask;
