import React, { useState } from 'react';
import PhotoPage from '../../../assets/images/1.jpg'
import Preloder from '../../Preloader/Preloader';
import PhotoStat from '../../../assets/images/22.png'
import real from "./ProfileInfo.module.css"
import ProfileStatusHook from '../ProfileStatusHook';
import { SocialForm } from './ProfileForm';



const ProfileInfo = (props) => {
  debugger
  const [idetMod, setidetMod] = useState(false)

  if (!props.profile) {
    return <Preloder />
  }

  const FotoSelect = (e) => {

    if (e.currentTarget.files.length) {
      props.getSavePhoto(e.currentTarget.files[0])

    }
  }
  const onSubmit = (data) => {

    props.SaveProfile(data)
    setidetMod(false)
  }
  return (<div>
    <div >
     
      <div className={real.descript_block}>


        <img src={props.profile.photos.large != null ? props.profile.photos.large : PhotoPage} className={real.photo} />
        {props.owner && <input type={"file"} onChange={FotoSelect} />}
        <div>  <span className={real.About}>{props.profile.aboutMe} </span>
          <div>
            {idetMod ?
              <SocialForm owner={props.owner} onSubmit={onSubmit} social={props.profile} />
              : <ProfileSocial owner={props.owner} social={props.profile} GotoEdit={() => setidetMod(true)} />}
          </div>
          <ProfileStatusHook status={props.status} getStatusUpadte={props.getStatusUpadte} />
        </div>
      </div>
    </div>
  </div>
  );
}
const ProfileSocial = (props) => {

  const Social = ({ contactTitile, contactValue }) => {
    return <div><b>{contactTitile}</b>:  {contactValue}</div>
  }
  return (
    <div>
      {props.owner && <button onClick={() => { props.GotoEdit(true) }}>edit</button>}
      <div>
        <span  >lookingForAJob: {props.social.lookingForAJob && 'yes', 'No'}</span>
      </div>


      <div>
        My skils :{props.social.lookingForAJobDescription}
      </div>

      <div>
        About Me: {props.social.aboutMe}
      </div>
      <div>
        FullName: {props.social.fullName}
      </div>
      Contact :{

        Object.keys(props.social.contacts).map(key => {
          return <Social contactTitile={key} key={key} contactValue={props.social.contacts[key]} />
        })
      }
    </div>
  )
}

export default ProfileInfo;