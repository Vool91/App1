import * as axios from 'axios';
import React from 'react';
import us from'./Users.module.css';
import UserPhoto from './../../assets/images/photo.jpg';

const Users= (props)=>{

let getUsers=()=>{

if(props.users.length===0){
 
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{  
        props.setUsers(response.data.items)
    })
};
}
return <div>
    <button onClick={getUsers}>Get Users</button>
    {props.users.map(u=> <div key={u.id}>

         <span>
             <div>
                 <img src={u.photos.small!=null ? u.photos.small:UserPhoto} className={us.img_ava}/>
             </div>
             <div>
                 {u.followed 
                 ?<button onClick={()=>{props.unfollow(u.id)}} >Follow</button> 
                 :<button onClick={()=>{props.follow(u.id)} }>UnFollow</button>
                 }
                 
                 </div>
         </span>
         <span>
             <div className={us.context}>
                 <div>{u.name}</div>
             <div>{u.status}</div>
               </div>  
             <div>
                 <div>{"u.location.city"}</div>
                 <div>{"u.location.country"}</div>
                 </div>

         </span>
            </div> ) 

 
        }  
         </div>    
};

export default Users;