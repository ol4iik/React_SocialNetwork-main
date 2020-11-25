import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfileThunk, updatePostText, addPost, setStatusThunk, updateStatusThunk } from '../../Redux/profile-reducer';
import { IsAuth } from '../../Redux/auth-reducer';
import { AuthRedirect } from '../common/hoc/AuthRedirect';
import Profile from './Profile';



class ProfileContainer extends React.Component {
 userId = this.props.match.params.userId;
    componentDidMount(){
        // console.log('Profile Id' + this.props.match.params.userId);
        // let userId = this.props.match.params.userId;
        if(!this.userId){
            this.userId = this.props.id;
            if(!this.userId){
                this.userId = 12341;
            }
        } 
        this.props.getProfile(this.userId);

        this.props.getStatus(this.userId);
    }


    render() {
        return <div>
            <Profile userIdURL={this.userId}
            updateStatus={this.props.updateStatus}
            updatePostText={this.props.updatePostText} 
            {...this.props} 
            addPost={this.props.addPost}/>
        </div>
    }
}
let mapStateToPropsRedirect = (state) => {
    return { isAuth: state.auth.isAuth }
}
const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText,
        userStatus: state.profile.userStatus,
        profile: state.profile.profile,
        id: state.auth.id
    }
}
export default compose(
    
    connect(mapStateToProps, {
        getProfile: getProfileThunk,
        addPost,
        updatePostText,
        getStatus: setStatusThunk,
        updateStatus: updateStatusThunk,
        IsAuth: IsAuth
    }),
    withRouter,
    AuthRedirect
)(ProfileContainer)