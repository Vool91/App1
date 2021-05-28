import React from 'react';
import it from './Post.module.css'
const Post = (props) =>{

    return (
      <div className={it.posts}>
               <div className={it.item}>
          <img src='https://img.wallpapersafari.com/phone/1080/1920/11/23/pZXI2w.jpg'/> 
           {props.message} 
        </div>
        <div>
         <span>Like-{props.сount}</span>
        </div>
        </div>
      
       );
}

export default Post;