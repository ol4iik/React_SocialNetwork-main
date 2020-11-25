import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserThunk, followThunk, unFollowThunk } from "../../Redux/users-reducer";
import Users from './Users';
import {AuthRedirect} from '../common/hoc/AuthRedirect';

const mapStateToProps = (state) => {
   return {
    items: state.users.items,
    currentPage: state.users.currentPage,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
    } 
}


class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize);
    }
    
    pageChange = (pageNumber) => {
        this.props.getUserThunk(pageNumber, this.props.pageSize);
    }

    followUser = (userId) => {
        this.props.followThunk(userId);
    }
    unFollowUser = (userId) => {
        this.props.unFollowThunk(userId);
    }

    render(){
        return <div>
            <Users {...this.props} pageChange={this.pageChange} follow={this.followUser} unFollow={this.unFollowUser}/>
        </div>
    }
}


export default compose(
    connect(mapStateToProps, {
    getUserThunk,
    followThunk,
    unFollowThunk}),
    AuthRedirect
)(UsersContainer);