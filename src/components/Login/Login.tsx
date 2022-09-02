import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import { reduxForm } from 'redux-form'
import {connect, useDispatch} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css";
import formStyle from "../common/FormsControls/FormsControls.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean,
}

type LoginPropsType = {
    loginTC: (formData: FormDataType) => void
    isAuth: boolean
}

const Login = React.memo((props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

       return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
})


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} placeholder={'Email'} name={'email'} validate={[required]} />
        </div>
        <div>
            <Field component={Input} name={'password'} placeholder={'Password'} type={"password"} validate={[required]} />
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'} />remember me
        </div>
        <div>
           <button>Login</button>
        </div>
        {props.error && <div className={formStyle.formSummaryError}>
            {props.error}
        </div>
        }
    </form>
})

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'} ) (LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {loginTC})  (Login);
