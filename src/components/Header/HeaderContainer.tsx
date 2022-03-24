import React from "react";
import Header from "./Header";
import {authAPITC, authReducerStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, authReducerStateType> {

    componentDidMount() {
       this.props.authAPITC();
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
    authAPITC: () => void,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect (mapStateToProps, {setAuthUserData, authAPITC}) (HeaderContainer);