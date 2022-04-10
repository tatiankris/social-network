import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileData,
    getStatus,
    InitialStatePostType,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerPropsType = mapStateToPropsProfileType & mapDispatchToPropsProfileType;
type CommonPropsType = RouteComponentProps<ParamsType> & ProfileContainerPropsType;
type ParamsType = {
    userId: string | undefined
}

class ProfileContainer extends React.Component <CommonPropsType, Array<InitialStatePostType>> {

    componentDidMount = ():void => {
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = '2';
        }
        this.props.getProfileData(userId);
        this.props.getStatus(userId);
    }

    render () {

      return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

type mapDispatchToPropsProfileType = {
    setUserProfile: (profile: any) => void
    getProfileData: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type mapStateToPropsProfileType = {
    profile: any
    status: string
}

const mapStateToProps = (state: AppStateType):mapStateToPropsProfileType  => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }

}

export default compose <React.ComponentType>(connect (mapStateToProps, {setUserProfile, getProfileData, getStatus, updateStatus}),
    withAuthRedirect, withRouter) (ProfileContainer);

