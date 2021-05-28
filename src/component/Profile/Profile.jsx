import React from 'react';
import MypostsContainer from './myposts/MypostContainer';
import './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

 
const Profile = (props) =>{

   return (<div>
    <ProfileInfo  profile={props.profile}
     status={props.status}  getStatusUpadte={props.getStatusUpadte} 
     owner={props.owner} getSavePhoto={props.getSavePhoto}  SaveProfile={props.SaveProfile}/>
    <MypostsContainer   />
    
     </div>
       );
}

export default Profile;