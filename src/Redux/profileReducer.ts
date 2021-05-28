
import { profileType, postmessType, PhotosType } from './../Types/type';
import { APIUsers, ProfAPI } from "../api/api";

const Add = 'Add';

const PROFILE_USER = 'PROFILE_USER';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_OK='SAVE_PHOTO_OK'
const SAVE_PROFILE_OK='SAVE_PROFILE_OK'


type inicializStateType=typeof inicializState
let inicializState = {
  postmess: [{ id: 1, message: 'Hello ', сount: 15 }
    , { id: 2, message: 'Its my first post ', сount: 22 }
    , { id: 3, message: 'Its my first sss ', сount: 44 }
    , { id: 4, message: 'Itss ', сount: 555 } ]as Array<postmessType>,
  profile:null as profileType |null, status: ''
};
type AllTpeProfile=addPostActionCreateType|setProfileType|setPhotoSaveType|setStatusType|setSaveProfileType
const profileReducer = (state :inicializStateType= inicializState, action:AllTpeProfile):inicializStateType => {

  switch (action.type) {
    case Add: let newPost = { id: 5, message: action.newPostText, сount: 0 };

      return {
        ...state,
        postmess: [...state.postmess, newPost],

      };

    case SET_STATUS: return { ...state, status: action.status }
    case SAVE_PHOTO_OK: return  { ...state,
       profile: {...state.profile,photos: action.photos}as profileType }
    case SAVE_PROFILE_OK: return  { ...state, profile:  action.profile} 
    case PROFILE_USER:
      return {
        ...state,
        profile: action.profile
      };

    default: return state;
  }

}
type addPostActionCreateType={
  type:typeof Add, newPostText:string
}

export const addPostActionCreate = (newPostText:string):addPostActionCreateType => {debugger
  return {
    type: Add, newPostText
  }
};
type setProfileType={
  type:typeof PROFILE_USER, profile:profileType
}
export const setProfile = (profile:profileType) :setProfileType=> {
  return {
    type: PROFILE_USER, profile
  }
}
type setPhotoSaveType={
  type:typeof SAVE_PHOTO_OK, photos:PhotosType
}
export const setPhotoSave = (photos:PhotosType):setPhotoSaveType => {

  return {
    type: SAVE_PHOTO_OK, photos
  }
}
type setStatusType={
  type:typeof  SET_STATUS, status:string

}
export const setStatus = (status:string):setStatusType => {
  return {
    type: SET_STATUS, status
  }
}
type setSaveProfileType={
  type:typeof  SAVE_PROFILE_OK, profile:profileType

}
export const setSaveProfile = (profile:profileType) :setSaveProfileType=> {
  return {
    type: SAVE_PROFILE_OK, profile
  }
}
// type getSavePhotoType={
//   type:typeof  SAVE_PROFILE_OK, profile:Object

// }
export const getSavePhoto= ( File:string) => async (dispatch:any) => {
  let response = await ProfAPI.getPhoto( File)
    if (response.data.resultCode === 0) {

    dispatch(setPhotoSave(response.data.data.photos))}
};

export const getUSerProfile = (userId:number) => async (dispatch:any) => {
  let response = await APIUsers.getProfile(userId)
  debugger
  dispatch(setProfile(response.data))
};

export const getStatusUpadte = (status:string) => async (dispatch:any) => {
  
  try{
  let response = await ProfAPI.UpdateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
  catch(error){
    debugger 
    alert('ssssssssssssssss')
}
}

export const getStatusProfile = (userId:number) => async (dispatch:any) => {
  let response = await ProfAPI.getStatus(userId)
  dispatch(setStatus(response.data))
};



export const SaveProfile= ( profile:Object) => async (dispatch:any,getState:any) => {
  let userId = getState().auth.userId
  let response = await ProfAPI.getSaveProfail( profile)
    if (response.data.resultCode === 0) {

    dispatch(getUSerProfile(userId))
  }
};

export default profileReducer;