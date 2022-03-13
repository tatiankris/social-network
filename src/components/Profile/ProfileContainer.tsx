import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPost, InitialStatePostType, onPostChange, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";

type ProfileContainerPropsType = mapStateToPropsProfileType & mapDispatchToPropsProfileType;

class ProfileContainer extends React.Component <ProfileContainerPropsType, Array<InitialStatePostType>> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(response => {
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

const mapStateToProps = (state: AppStateType) => {
    return{
        profile: state.profilePage.profile,
    }

}

export default connect (mapStateToProps, {setUserProfile, addPost, onPostChange}) (ProfileContainer);