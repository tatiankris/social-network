import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStatePostType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = mapStateToPropsProfileType & mapDispatchToPropsProfileType;
type CommonPropsType = RouteComponentProps<ParamsType> & ProfileContainerPropsType;
type ParamsType = {
    userId: string | undefined
}

class ProfileContainer extends React.Component <CommonPropsType, Array<InitialStatePostType>> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
            }
        )
    }

    render () {

      return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type mapDispatchToPropsProfileType = {
    setUserProfile: (profile: any) => void
}
type mapStateToPropsProfileType = {
    profile: any
}

const mapStateToProps = (state: AppStateType):mapStateToPropsProfileType  => {
    return{
        profile: state.profilePage.profile,
    }

}

export default compose <React.ComponentType>(connect (mapStateToProps, {setUserProfile}),
    withRouter, withAuthRedirect) (ProfileContainer);

