import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>Elektron konnection</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Recherche..."/>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Jackson_5_1974_%28Michael%29.jpg" alt="Syntakt 12 track drum computer and synthesizer" />
          <span>Mickeal jackson</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;