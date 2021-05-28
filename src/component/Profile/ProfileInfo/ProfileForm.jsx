import React from 'react'
import { useForm } from 'react-hook-form';


export const SocialForm=(props)=>{
  
    const { handleSubmit, register } = useForm();

  
    return(
        <form onSubmit={handleSubmit(props.onSubmit)} >
       
        {
        props.owner && <button >Save</button>}
     
        <div >lookingForAJob: 
        <input type='checkbox'  {...register("lookingForAJob")} />
    </div>
        <div >About Me:
            <input type='text'   {...register("aboutMe")} />
        </div> 
        <div>
          My skils :<input type='text'   {...register("lookingForAJobDescription")} />
        </div>
        <div>
          Fullname :<input type='text'   {...register("fullName")} />
        </div>
        Contact :{Object.keys(props.social.contacts).map(key=>{
    return  <div>
     
    <b>{key}:<input type='text' placeholder={key}   {...register(("contacts")+'.'+key)} key={key}/></b>
    </div>
    })
  }
      </form>
    )
  }
