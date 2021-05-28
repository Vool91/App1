import React from "react";
import us from "./Users.module.css";
import UserPhoto from "./../../assets/images/photo.jpg";
import { NavLink } from "react-router-dom";
import { APIUsers } from "../../api/api";


let User = ({ user, unfollow, follow, followingProgres }) => {
  

  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            {" "}
            <img
              src={user.photos.small != null ? user.photos.small : UserPhoto}
              className={us.img_ava}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              onClick={() => {
                followingProgres(false);
                APIUsers.unfollow(user.id).then((response) => {
                  if (response.data.resultCode === 0) {
                    unfollow(user.id);
                  }
                  followingProgres(true);
                });
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              onClick={() => {
                followingProgres(false);
                APIUsers.follow(user.id).then((response) => {
                  if (response.data.resultCode === 0) {
                    follow(user.id);
                  } followingProgres(true);
                });
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div className={us.context}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </div>
      </span>
    </div>
  );
};
export default User;
