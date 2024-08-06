// import LogoutIcon from '@mui/icons-material/Logout'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Header = (props) => {
  return (
    <header className="header-form">
     
      <button className='icon'>{props.iconL}</button>
      <h2>{props.titleName}</h2>
      <button className='icon'>{props.iconR}</button>

    </header>
  );
};

export default Header;
