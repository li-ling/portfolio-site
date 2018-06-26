import React from 'react'; 
// import { a } from "react-router-dom";
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
                <a href='/'>Home</a>
            </li>            
            <li className={styles.NavigationItem}>
                <a href='/#portfolio'>Portfolio</a>
            </li>            
            <li className={styles.NavigationItem}>
                <a href='/'>About</a>
            </li>            
            <li className={styles.NavigationItem}>
                <a href='/#contact'>Contact</a>
            </li>            
        </ul>
    </nav>
    </header>

  )
};

export default toolbar;