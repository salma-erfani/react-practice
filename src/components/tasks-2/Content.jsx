import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Content = () => {
  return (
    <div className="content-input">
      <div className="input-group">
        <div className="text-wrap">
          <label for="username">name</label>
          <input type="text" id="username" placeholder="Task #1" />
        </div>
        {/* <img src="icons/cancel-icon.svg" className="icon" /> */}
        <button className="btn-content icon">
          <CancelOutlinedIcon />
        </button>
      </div>
      <div className="input-group">
        <div className="text-wrap">
          <label for="password">priority</label>
          <input type="password" id="password" placeholder="High" />
        </div>
        {/* <img src="./icons/eye-icon.svg" className="icon" /> */}
        <button className="btn-content icon">
          <VisibilityOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Content;
