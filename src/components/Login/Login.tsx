import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import { reduxForm } from 'redux-form'
import {useDispatch} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean,
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={'login'} placeholder={'Login'} validate={[required]} />
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={'Password'} validate={[required]} />
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'} />remember me
        </div>
        <div>
           <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'} ) (LoginForm)

const Login = () => {

    // let dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        // dispatch(loginTC(formData));
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;