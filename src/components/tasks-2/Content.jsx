import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


const Content = (props) => {
  return (
    <div className="content-input">
      <div className="input-group">
        <div className="text-wrap">
          <label for="username">{props.labelTop}</label>
          <input type="text" id="username" placeholder={props.plhTop} />
        </div>
       
        <button className="btn-content icon">
          {props.iconTop}
        </button>
      </div>
      <div className="input-group">
        <div className="text-wrap">
          <label for="password">{props.labelBottom}</label>
          <input type="password" id="password" placeholder={props.plhBottom} />
        </div>
      
        <button className="btn-content icon">
          {props.iconBottom}
        </button>
      </div>
    </div>
  );
};

export default Content;
