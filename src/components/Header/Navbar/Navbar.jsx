import style from './../Header.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.links}>
            <NavLink className={style.link} activeClassName={style.activeLink} to='/profile'>Profile</NavLink>
            <NavLink className={style.link} activeClassName={style.activeLink} to='/dialogs'>Dialogs</NavLink>
            <NavLink className={style.link} activeClassName={style.activeLink} to='/users'>Users</NavLink>
            {props.isAuth ? 
            <NavLink className={style.login} to='/login'>{props.login}</NavLink>
            : 
            <NavLink className={style.login} to='/login'>Login</NavLink>
            }
        </div>
    );
}

export default Navbar;