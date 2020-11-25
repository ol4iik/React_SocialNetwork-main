import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import React from 'react';
import { IsAuth } from "../../../Redux/auth-reducer";

let mapStateToPropsRedirect = (state) => {
    return { isAuth: state.auth.isAuth }
}

export const AuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        console.log(props.isAuth);
        return props.isAuth ? <Component {...props }/>: < Redirect to = { '/login' } />
    }
    return connect(mapStateToPropsRedirect, {})(RedirectComponent);
}

