import React, { useEffect, useState } from 'react';
const ProfileStatusHook = (props) => {
  const ActivMod = () => {
    setidetMod(true)
  }
  const DeactivMod = () => {
    setidetMod(false)
    props.getStatusUpadte(status);
  }
  const OnStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
  const [idetMod, setidetMod] = useState(false)
  const [status, setStatus] = useState(props.status)
  useEffect(()=>{
    setStatus(props.status)
  },[props.status])
  return (<>
    <div>
      {!idetMod &&
        <span onDoubleClick={ActivMod}><b>Me Status :</b> {props.status || 'Напиши статус'}</span>
      }
    </div>
    <div>
      {idetMod &&
        <input onChange={OnStatus} autoFocus={true} value={status} onBlur={DeactivMod} />}
    </div>
  </>

  )
}

export default ProfileStatusHook;