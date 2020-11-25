import { Field } from 'redux-form';
import {emailField, requiredField} from './../common/Validators/Validators';
import {InputText} from './InputText';
import style from './InputText.module.css';


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            
            <div><Field placeholder='email' name='email' type='text' component={InputText} validate={[requiredField, emailField]}/></div>
            <div><Field name='password' placeholder='password' type='password' component={InputText} validate={[requiredField]}/></div>
            <div><Field type='checkbox' name='rememberMe' component='input'/>RememberMe</div>
            {props.error && <div className={style.error}>
                <span>{props.error}</span>
            </div>}
           
            <button>Log In</button>
        </form>
    )
}

export default LoginForm;