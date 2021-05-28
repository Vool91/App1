import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { LoginSend } from '../../Redux/authReduser';

import log from './Login.module.css'


const LoginForm=(props)=>{
debugger
    const { handleSubmit, register } = useForm();

    const onSubmit=(data)=>{
    
    
      props.LoginSend(data.email,data.password,data.rememberMe,data.captcha)
}
debugger
return (

<form  className={log.box}  onSubmit={handleSubmit(onSubmit)}>
   <div><input type='text'   {...register("email")} name='email' /></div> 
    <div><input  type='password' {...register("password")} name='password' /></div>
    <div ><input  type="checkbox" name="rememberMe"  {...register("rememberMe")} ></input>Remember me</div>
   {  props.captohaUrl &&<img src={props.captohaUrl}/>}
   {props.captohaUrl && <input type='text'   {...register("captcha")} name='captcha' />}
    <button type="submit">login</button>
</form>
)

}


const Login=(props)=>{

  if(props.isAuth){
      return <Redirect to='/profile' />
  }
    return (
    <div>
    <h1>Login</h1>
    <LoginForm {...props} />
    
    </div>
    
    )
    
    }
  const mapStateToProps=(state)=>{
    debugger
    return {
      captohaUrl:state.auth.captohaUrl,
    isAuth:state.auth.isAuth
  }}
  export default connect(mapStateToProps,{LoginSend})(Login); 