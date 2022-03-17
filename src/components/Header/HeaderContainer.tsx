import React from "react";
import Header from "./Header";
import {authReducerStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, authReducerStateType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true
            })
            .then( response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    this.props.setAuthUserData(email, id, login);
                }
            })
    }

    render() {
        return(
            <Header {...this.props} />
        )
    }
}

type mapStateToPropsType = {
    login: string,
    isAuth: boolean,
}
type mapDispatchToPropsType = {
    setAuthUserData: (email: string, id: number, login: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);