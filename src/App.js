import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { setInitializingThunk } from './Redux/appInit-reducer';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from './components/common/hoc/lazyHOC';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const mapStateToProps = (state) => {
  return {
    isInitialized: state.appInit.isInitialized
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.setInitializing();
  }

  render() {
    
      if (!this.props.isInitialized) return <Preloader />
       else return(
          <div>
            <HeaderContainer />
        
            <div className='contentWrap'>
              <Route path='/dialogs' 
              render={() => withSuspense(DialogsContainer)} />
              <Route path='/login' 
              render={() => <LoginContainer />} />
              <Route path='/users' 
              render={() => withSuspense(UsersContainer)} />
              <Route path='/profile/:userId?' 
              render={() => <ProfileContainer />} />

            </div >
          </div>
        ); 
    

  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setInitializing: setInitializingThunk
  })  
)(App);
