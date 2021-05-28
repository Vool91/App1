import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

   let mapStateToPropsRederect = (state) => {

        return {
      
          isAuth: state.auth.isAuth

        }
      }
export const withAuthRederect=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
                if (!this.props.isAuth) return <Redirect to='/login' />
              return <Component {...this.props} />
              }
    }
     let  ConnectAuthRedereCompon= connect(mapStateToPropsRederect)(RedirectComponent);
    return ConnectAuthRedereCompon;
}