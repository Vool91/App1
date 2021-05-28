import React, { Component,Suspense } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import News from './component/News/News';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import HeaderContainer from './component/Header/HeaderContainer';
import LoginPage from './component/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inicialazApp } from './Redux/AppREduser';
import Preloder from './component/Preloader/Preloader';


const DialogsContainer= React.lazy(()=>import('./component/Dialogs/DialogsContainer'));
const ProfileContainer= React.lazy(()=>import('./component/Profile/ProfileContainer'))
const UsersContainer= React.lazy(()=>import('./component/User/UsersContainer'))

class App  extends Component{


  
  componentDidMount() {

    this.props.inicialazApp();
    window.addEventListener("unhandledrejection", this.CathHandleErors)
  }
 componentWillUnmount(){
  window.removeEventListener("unhandledrejection", this.CathHandleErors)
 }
render(){
 
  if(!this.props.inicializet){
    return <Preloder />
  }
  return (

    <div className="main-wrapper">
     
       <HeaderContainer />
      <Navbar />

      <div className='main-wrapper-content' >
<Suspense  fallback={<Preloder/>}>
  <Switch>
  <Route exact path='/' render={() => <Redirect to={'/profile'}/>} />
        <Route path='/dialogs' render={() => <DialogsContainer  />} />
        <Route path='/profile/:userId?' render={() => < ProfileContainer />} />
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/users' render={() => <UsersContainer pageTitile={'Samurai'} />} />
        <Route path='/settings' render={Settings} />
        <Route path='/login' render={() => <LoginPage />} />
        <Route path='*' render={() => <div>404 NOT FOUUND</div>} />
        </Switch>
</Suspense>
      </div>
   
    </div>

  );
}}

const mapStateToProps=(state)=>(

  {

  inicializet:state.app.inicializet
})


export default compose( withRouter ,connect(mapStateToProps, {inicialazApp}))(App);
