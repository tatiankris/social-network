import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileData,
    getStatus,
    setUserProfile, updatePhoto,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileResponseType} from "../../api/api";


type ProfileContainerPropsType = mapStateToPropsProfileType & mapDispatchToPropsProfileType;
type CommonPropsType = RouteComponentProps<ParamsType> & ProfileContainerPropsType;

type ParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<CommonPropsType> {

    refreshProfile () {
        let userId: number|null = Number(this.props.match.params.userId);
        if (userId) {
            this.props.getStatus(userId);
            this.props.getProfileData(userId);
        }
        if (!userId) {
            let newUserId = this.props.autorizedUserId;
            this.props.getStatus(newUserId);
            this.props.getProfileData(newUserId);
            if (!newUserId) {
                this.props.history.push('/login');
            }
        }
    }
    componentDidMount () {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        //debugger
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render () {
        console.log('renderProfileContainer')
      return(
          <Profile isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} updatePhoto={this.props.updatePhoto}/>
      )
    }
}

type mapDispatchToPropsProfileType = {
    setUserProfile: (profile: any) => void
    getProfileData: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    updatePhoto: (image: object) => void
}
type mapStateToPropsProfileType = {
    profile: ProfileResponseType,
    status: string
    autorizedUserId: number
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType):mapStateToPropsProfileType  => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }

}

// export default withRouter();
// export default withRouter((connect<mapStateToPropsProfileType, mapDispatchToPropsProfileType, {},AppStateType >
// (mapStateToProps, {setUserProfile, getProfileData, getStatus, updateStatus}))(ProfileContainer))

// export default compose (
//     withRouter,
//     connect<mapStateToPropsProfileType, mapDispatchToPropsProfileType, {},AppStateType >
// (mapStateToProps, {setUserProfile, getProfileData, getStatus, updateStatus})(ProfileContainer))


export default compose<React.ComponentType>(
    withRouter, withAuthRedirect, connect<mapStateToPropsProfileType, mapDispatchToPropsProfileType, {},AppStateType>(mapStateToProps, {setUserProfile, getProfileData, getStatus, updateStatus, updatePhoto})
)(ProfileContainer);
