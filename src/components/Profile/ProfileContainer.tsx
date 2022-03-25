import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStatePostType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

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
        if (this.props.isAuth === false) return <Redirect to={"/login"}/>
        
      return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type mapDispatchToPropsProfileType = {
    setUserProfile: (profile: any) => void
}
type mapStateToPropsProfileType = {
    profile: any
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType):mapStateToPropsProfileType  => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);