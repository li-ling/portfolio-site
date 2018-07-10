import React from 'react'; 
import { NavLink } from "react-router-dom";
import styles from './ToolBar.css';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
    <div className={styles.DesktopOnly}></div>
    {/*<div>Logo</div>
     <DrawerToggle clicked={props.menuClicked} />
    <div className={styles.Logo}>
        <Logo />
    </div> */}
    <nav>
        <ul className={styles.NavigationItems}>
            <li className={styles.NavigationItem}>
                <NavLink exact to='/#intro' activeClassName={styles.active}>Home</NavLink>
            </li>            
            <li className={styles.NavigationItem}>
                <NavLink to='/#portfolio' >Portfolio</NavLink>
            </li>            
            <li className={styles.NavigationItem}>
                <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
            </li>            
            <li className={styles.NavigationItem}>
                <NavLink to='#contact' >Contact</NavLink>
            </li>            
        </ul>
    </nav>
    </header>

  )
};

export default toolbar;