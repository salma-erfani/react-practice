import { Link } from "react-router-dom";
import Button from "../utilities/Button";

const TaskAddButton = () => {
  return (
    <Link to={"/task/createtask"}>
      <Button>
        <span className="plus-icon">+</span>
        <span>Task</span>
      </Button>
    </Link>
  );
};

export default TaskAddButton;
