import LoginForm from "./LoginForm";
import { reduxForm } from 'redux-form';

const LoginForms = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {

    console.log(props);

    let onSubmit = (value) => {
        props.logInUser(value.email, value.password, value.rememberMe);
    }

    let logOutAccount = () => {
        props.logOutUser();
    }

    return (
        <div>
            {!props.isAuth ?
                <>
                    <h1>Login</h1>
                    <LoginForms onSubmit={onSubmit} />
                </>
                :
                <>
                    <h1>You are login successfully</h1>
                    <button onClick={logOutAccount}>Log out</button>
                </>
            }

        </div>
    );
}



export default Login;