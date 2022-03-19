import React from "react";
import Header from "./Header";
import {authReducerStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, authReducerStateType> {

    componentDidMount() {
        authAPI.getAuthUserData()
            .then( data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
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