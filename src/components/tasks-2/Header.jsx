// import LogoutIcon from '@mui/icons-material/Logout'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Header = () => {
  return (
    <header className="header-form">
      {/* <img src="./icons/delete.svg" class="icon" /> */}
      <button className='icon'>< DeleteOutlinedIcon /></button>
      <h2>Edit Task #1</h2>
      {/* <img src="./icons/arrow_right.svg" class="icon" /> */}
      <button className='icon'><KeyboardArrowRightOutlinedIcon /></button>
    </header>
  );
};

export default Header;
