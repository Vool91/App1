import { AppStateType } from "./redux-store"


export const  getUsersMAY = (state:AppStateType)=>{

  return   state.UsersPage.users

}
export const getPageSiz= (state:AppStateType)=>{
     return state.UsersPage.pageSize 
}
export const getToTCount=(state:AppStateType)=>{
     return state.UsersPage.totalUsersCount
}
export const getStartPage=(state:AppStateType)=>{
    return state.UsersPage.startPage
}
export const getFetching=(state:AppStateType)=>{
    return state.UsersPage.isFetching
}
export const getFollowProg=(state:AppStateType)=>{
    return state.UsersPage.followingProgres
}

