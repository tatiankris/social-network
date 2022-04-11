import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import { reduxForm } from 'redux-form'

type FormDataType = {
    login: string
    password: string
    remember_me: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'input'} name={'login'} placeholder={'Login'} />
        </div>
        <div>
            <Field component={'input'} name={'password'} placeholder={'Password'}/>
        </div>
        <div>
            <Field component={'input'} name={'remember me'} type={'checkbox'} />remember me
        </div>
        <div>
           <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'} ) (LoginForm)

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;