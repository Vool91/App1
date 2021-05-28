import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import it from './Mypost.module.css'
import Posts from './post/Post';

const AddPost=(props)=>{ 
debugger
  const onSubmit=(values)=>{
    debugger
    props.Add(values.newPostText);
    }
  const { handleSubmit, register } = useForm();
  return(<form onSubmit={handleSubmit(onSubmit)}>
    <div>
    <textarea {...register("newPostText")}  /> 
    </div>
    <div>
    <button className={it.button} >add post</button>
   </div>
   </form>
  )

 
}

const Myposts =React.memo(props => {
debugger
  let PostsElement = props.ProfilePage.postmess.map(p => <Posts   message ={p.message} сount={p.сount}/>);


   return(
    <div className={it.posts}>
    <h3>My post</h3>
      <div>
       <AddPost />
      </div>
    {PostsElement}
      </div>  
       );
})
export default Myposts;