import { useState } from "react";

const LoginForm = (props) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClearUsername = () => {
    props.setUsername("");
  };

  const handleMouseDown = () => {
    setIsPasswordVisible(true);
  };

  const handleMouseUp = () => {
    setIsPasswordVisible(false);
  };

  return (
    <div className="content-input">
//username input--------------------
      <div className="input-group">
        <div className="text-wrap">
          <label for="username">{props.labelTop}</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder={props.plhTop}
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
        </div>
//cancel icon--------------------
        <button className="btn-content icon" onClick={handleClearUsername}>
          {props.iconTop}
        </button>
      </div>
//password input--------------------
      <div className="input-group">
        <div className="text-wrap">
          <label for="password">{props.labelBottom}</label>
          <input
            id="password"
            autoComplete="off"
            placeholder={props.plhBottom}
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
 //Visibility icon--------------------
        <button
          className="btn-content icon"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {props.iconBottom}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
