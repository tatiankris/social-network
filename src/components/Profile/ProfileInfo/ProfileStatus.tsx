import React from "react";


type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
       editMode: false
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }


    render () {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;
