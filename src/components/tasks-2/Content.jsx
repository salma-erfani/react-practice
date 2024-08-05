const Content = () => {
    return (
        <div className="content-input">
        <div className="input-group">
          <div className="text-wrap">
            <label for="username">name</label>
            <input type="text" id="username" placeholder="Task #1" />
          </div>
          <img src="./icons/cancel-icon.svg" className="icon" />
        </div>
        <div className="input-group">
          <div className="text-wrap">
            <label for="password">priority</label>
            <input type="password" id="password" placeholder="High" />
          </div>
          <img src="./icons/eye-icon.svg" className="icon" />
        </div>

      </div>
    );
  };
  
  export default Content;