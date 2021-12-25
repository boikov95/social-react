import React from 'react';
import Profile from './component/Profile/Profile';
import s from './App.module.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import UsersContainer from './component/Users/UsersContainer';
import HeaderComponent from './component/Header/HeaderComponent';
import Login from './component/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialized } from './Redux/appreducer';
import { withRouter } from 'react-router';
import tooglephoto from './photo/loading.gif'
import { withSuspect } from './component/HOC/withSuspect';
const DialogsContainer = React.lazy(()=> import ('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import ('./component/Profile/ProfileContainer'));

class App extends React.Component {

componentDidMount(){
  this.props.initialized();
}


  render() {

    if (!this.props.initial)
    return (<tooglephoto />)

    return (
      <BrowserRouter>
        <div className={s.wrapper}>
          <HeaderComponent />
          <Navbar friend={this.props.friend} />
          <div className={s.content}>
            <Route path='/dialogs' render={withSuspect(DialogsContainer)}/>
            <Route path='/profile/:userId?' render={withSuspect(ProfileContainer)}/>
            <Route path='/music' render={() => <Music />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initial: state.app.initialized,
  friend: state.friendPage.friend 
})



export default compose(withRouter, connect(mapStateToProps, {initialized}))(App);
