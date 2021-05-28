import React from "react";
import { connect } from "react-redux";
import {  follow,  getUsers,  unfollow,  setStartpage,  followingProgres,} from "../../Redux/userReducer";
import Users from "./Users";
import Preloder from "../Preloader/Preloader";
import {  compose } from "redux";
import {  getFetching,  getFollowProg,  getPageSiz,  getStartPage,  getToTCount,  getUsersMAY,} from "../../Redux/UsersSelector";
import { UsersType } from "../../Types/type";
import { AppStateType } from "../../Redux/redux-store";

type PropsType={
  pageTitile:string
  startPage:number
  pageSize:number
  getUsers:(  startPage:number,
    pageSize:number)=>void
    isFetching:boolean
    totalUsersCount:number
    users:Array<UsersType>
    follow:()=>void
    unfollow:()=>void
    followingProgres:Array<number>
    
}


class UserContainer extends React.Component <PropsType>{
  

  componentDidMount() {
    const {startPage,pageSize}=this.props
    this.props.getUsers(startPage, pageSize);
  }
  pageChange = (pageNumber:number) => {
    const {pageSize}=this.props
    this.props.getUsers(pageNumber, pageSize);
  };
  render() {
    return (
      <>
      <h2>{this.props.pageTitile}</h2>
        {this.props.isFetching ? <Preloder /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          startPage={this.props.startPage}
          pageChange={this.pageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProgres={this.props.followingProgres}
        />
      </>
    );
  }
}


let mapStateToProps = (state:AppStateType):any => {

  return {
    users: getUsersMAY(state),
    pageSize: getPageSiz(state),
    totalUsersCount: getToTCount(state),
    startPage: getStartPage(state),
    isFetching: getFetching(state),
    followingProgres: getFollowProg(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setStartpage,
    followingProgres,
    getUsers,
  })(UserContainer)
);
