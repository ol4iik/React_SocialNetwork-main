import { connect } from 'react-redux';
import Login from './Login';
import {logInUser, logOutUser} from './../../Redux/auth-reducer';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return{ 
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default compose(
connect(mapStateToProps,{
    logInUser,
    logOutUser
}))
(Login);