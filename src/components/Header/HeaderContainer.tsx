import React from "react";
import Header from "./Header";
import {logoutTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = {
    login: string,
    isAuth: boolean,
    logoutTC: () => void
}
class HeaderContainer extends React.Component<PropsType> {
    render() {
        return(
            <Header logoutTC={this.props.logoutTC} login={this.props.login} isAuth={this.props.isAuth} />
        )
    }
}

type mapStateToPropsType = {
    login: string,
    isAuth: boolean,
}
type mapDispatchToPropsType = {
    logoutTC: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}



export default connect<mapStateToPropsType, mapDispatchToPropsType, {},AppStateType >(mapStateToProps, { logoutTC})(Header);
