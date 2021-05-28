import { UsersType } from "../Types/type";

import { APIUsers } from "../api/api";
import { UpdateobjectArray } from "../utils/helper-object";
import { AppStateType } from "./redux-store";
import { Dispatch } from "react";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const UPDATEPAGE = "UPDATEPAGE";
const TOTALCOUNT = "TOTALCOUNT";
const ISFETCHINGTOG = "ISFETCHINGTOG";
const FOLLOWINGPROGRES = "FOLLOWINGPROGRES";
type inicializStateType= typeof inicializState
let inicializState = {
  users:[] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 10,
  startPage: 1,
  isFetching: false,
  followingProgres: [] as Array<number>
};



const userReducer = (
  state:  inicializStateType = inicializState ,
  action:any
)=> {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: UpdateobjectArray(state.users, action.userId, "id" , {
          followed: true,
        }),
      };
    case TOTALCOUNT:
      return { ...state, totalUsersCount: action.count };
    case ISFETCHINGTOG:
      return { ...state, isFetching: action.isFetching };
    case FOLLOWINGPROGRES:
      return {
        ...state,
        followingProgres: action.followingProgres
          ? [...state.followingProgres, action.userId]
          : state.followingProgres.filter((id) => id !== action.userId),
      };
    case UPDATEPAGE:
      return { ...state, startPage: action.startPage };
    case UNFOLLOW:
    
      return {
        ...state,
        users: UpdateobjectArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
}

export type ActionsTypes=followSuccessType|unfollowSuccessType|setUsersType|
setStartpageType|setTotalType|isFetchingType|followingProgresType

type followSuccessType = { type: typeof FOLLOW; userId: number };
export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOW,
  userId,
});
type unfollowSuccessType = { type: typeof UNFOLLOW; userId: number };
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});
type setUsersType = { type: typeof SET_USERS; users: Object };
export const setUsers = (users: Object): setUsersType => ({
  type: SET_USERS,
  users
});
type setStartpageType = { type: typeof UPDATEPAGE; startPage: number };
export const setStartpage = (startPage: number): setStartpageType => ({
  type: UPDATEPAGE,
  startPage,
});
type setTotalType = { type: typeof TOTALCOUNT; count: number };
export const setTotal = (count: number): setTotalType => ({
  type: TOTALCOUNT,
  count,
});
type isFetchingType = { type: typeof ISFETCHINGTOG; isFetching: boolean };
export const isFetching = (isFetching: boolean) :isFetchingType=> ({
  type: ISFETCHINGTOG,
  isFetching,
});
type followingProgresType = {
  type: typeof FOLLOWINGPROGRES;
  followingProgres: boolean;
  userId: number;
};
export const followingProgres = (
  followingProgres: boolean,
  userId: number
): followingProgresType => ({
  type: FOLLOWINGPROGRES,
  followingProgres,
  userId,
});

export const getUsers = (startPage: number, pageSize: number) => {
  return async (dispatch: Dispatch<ActionsTypes>,getState:()=>AppStateType) => {
    dispatch(isFetching(true));
    let data = await APIUsers.getUsers(startPage, pageSize);
    dispatch(setStartpage(startPage));

    dispatch(isFetching(false));

    dispatch(setUsers(data.items));
    dispatch(setTotal(data.totalCount));
  };
};

const FollowUnfollow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  apiAction: any
) => {
  dispatch(followingProgres(true, userId));

  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(apiAction(userId));
  }
  dispatch(followingProgres(false, userId));
};

export const follow = (userId: number) => {
  return async (dispatch: Dispatch<ActionsTypes>,getState:()=>ActionsTypes) => {
    FollowUnfollow(
      dispatch,
      userId,
      APIUsers.follow.bind(APIUsers),
      followSuccess
    );
  };
};
export const unfollow = (userId: number) => {
  return async (dispatch: Dispatch<ActionsTypes>,getState:()=>ActionsTypes) => {
    FollowUnfollow(
      dispatch,
      userId,
      APIUsers.unfollow.bind(APIUsers),
      unfollowSuccess
    );
  };
};
export default userReducer;
