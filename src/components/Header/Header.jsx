import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';


const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt='logo' />
            </div>
            <div className={style.navbarMenu}>
             <Navbar login={props.login} isAuth={props.isAuth}/>
            </div>
        </div>
    );
                
 
}

export default Header;