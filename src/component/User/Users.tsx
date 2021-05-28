import React ,{FC}from "react";
import { UsersType } from "../../Types/type";
import Pagination from "./Pagination";
import User from "./User";
type Props={
  totalUsersCount:number
  pageSize:number
  pageChange:(PagesCount:number)=>void
  startPage:number
  PortSize?:number
  users:Array<UsersType>
  followingProgres:Array<number>
  follow:()=>void
  unfollow:()=>void
  

  
}


let Users:FC<Props> = ({pageSize,startPage,totalUsersCount,pageChange,users,...props}) => {
  return (
    <div>
      <Pagination
        pageSize={pageSize}
        startPage={startPage}
        totalUsersCount={totalUsersCount}
        pageChange={pageChange}
      />
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
          followingProgres={props.followingProgres}
        />
      ))}
    </div>
  );
};
export default Users;
