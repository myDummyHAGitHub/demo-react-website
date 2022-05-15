import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
//import "./NavMenu.css";
import styles from './NavMenu.module.css'
import profileImg from "../navmenu/frog_porfile.jpg";

const NavMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleActive = ({ isActive }) => (isActive ? styles['link-active'] : styles.link);

  const handleToggle = ()=>{
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
    <div className={styles.nav_container}>
        <div className={[styles.row, styles['align-items-center'], styles['justify-content-between']].join(' ')}>
            <div className={styles.logo}>
              <img src={profileImg} alt="profile"/>
            </div>
            <button type="button" className={navbarOpen? [styles['nav-toggler'],styles.active].join(' '): styles['nav-toggler']} onClick={handleToggle}>
               <span></span>
            </button>
            <div className={navbarOpen? [styles.nav, styles.open].join(' ') : styles.nav } style={navbarOpen? {maxHeight:289}: {}}>
               <ul>
                  <li><NavLink className={toggleActive} to="/">Home</NavLink></li>
                  <li><NavLink className={toggleActive} to="/about">About</NavLink></li>
                  <li><NavLink className={toggleActive} to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink className={toggleActive} to="/contact">Contact</NavLink></li>
               </ul>
            </div>
        </div>
    </div>
    </nav>
  );
};
export default NavMenu;
