import { connect } from 'react-redux';
import { IsAuth } from '../../Redux/auth-reducer';
import Header from './Header';



let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(Header);