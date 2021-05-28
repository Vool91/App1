import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'



const Header = (props) =>{
 
 
    return (
    <header className={classes.header}>
        <img className={classes.img} src='https://www.clipartmax.com/png/middle/308-3084396_logo-42.png' />
     <div className={classes.login_block}>
       {props.isAuth  ? 
       <div>{props.login }<button onClick={props.Logout} disabled={!props.login}>LogOut</button></div>
       :      <div className={classes.Log}><NavLink to={'/login'}> Login </NavLink></div>}
     </div>

      </header>
      );
}

export default Header;