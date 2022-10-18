import React, {useEffect} from "react";
import {Field, InjectedFormProps} from "redux-form";
import { reduxForm } from 'redux-form'
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {loginTC, setCaptchaTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import formStyle from "../common/FormsControls/FormsControls.module.css"
import cs from '../../common-styles/BlockCommonStyles.module.scss'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean,
    captcha: string | null
}

type LoginPropsType = {
    loginTC: (formData: FormDataType) => void
    isAuth: boolean
    id: number
    login: string
    captcha: string | null
    setCaptchaTC: () => void
}

const Login = React.memo(({loginTC,setCaptchaTC, isAuth, id, login, captcha, ...props}: LoginPropsType) => {

    useEffect(() => {
        setCaptchaTC()
    }, [])

    const changeCaptcha = () => {
        setCaptchaTC()
    }
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData);

    }

        if (isAuth) {
            return <Redirect to={'/profile'} />
        }

       return <div className={cs.block}>
        <h2>Login</h2>
           <div style={{marginBottom: '8px'}}>
               <b>Free account:</b>
               <br/>Email: free@samuraijs.com
               <br/>Password: free
           </div>
        <LoginReduxForm onSubmit={onSubmit}/>
           {
               captcha && <div>
                   <img src={captcha}/>
                   <button onClick={changeCaptcha}>change captcha</button>
               </div>
           }

    </div>
})

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props: React.PropsWithChildren<InjectedFormProps<FormDataType, {}, string> & {children?: React.ReactNode}>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Login</button>
        </div>
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
            <Field component={Input} name={'captcha'} placeholder={'Captcha'} validate={[required]}/>
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
    id: number
    login: string
    captcha: string | null
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        captcha: state.auth.captcha
    }
}

export default connect (mapStateToProps, {loginTC, setCaptchaTC})(Login);
