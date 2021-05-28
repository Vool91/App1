import * as axios from 'axios';
import { get } from 'react-hook-form';


 const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"07115bc8-9271-497f-878e-ae6070a4fa79"
    }
 });
export const APIUsers={
    getUsers(startPage,pageSize){
        debugger
        return instance.get(`users?page=${startPage}&count=${pageSize}`).then(response=>{return response.data})
        
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
       
       return ProfAPI.getProfile(userId)
    }
}

export const AutAPI={
    getHaeder(){
     
        return instance.get('auth/me')
    },
    SendAuth(email,password,rememberMe=false,captcha=null){
        return instance.post("auth/login",{email,password,rememberMe,captcha})
    },
   deletAuth(){
        return instance.delete("auth/login")
    },
    getCapha(){
        return instance.get("security/get-captcha-url")
    }
}
export const ProfAPI={

     getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    UpdateStatus(status){
        return instance.put('profile/status',{status:status})
    },
    getPhoto(photos){
       
        let Formdata= new FormData()
        Formdata.append('image',photos)
       
        return instance.put('profile/photo',Formdata,{
            headers:{
                'Content-type': 'multipart/form-data'
            }
        })
    },getSaveProfail(profile){
        return instance.put('profile',profile)
    }
} 
export const ApiMusik=()=>{
    debugger
  return   get(`https://api.spotify.com/v1/me/player`).then(response=>{return response.data}
  
  )

}

