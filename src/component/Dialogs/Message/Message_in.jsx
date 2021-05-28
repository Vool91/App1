import React from 'react';
import dilmes from './Dialogs.module.css';



const Message_in =(props)=>{
    return(
        <div className={dilmes.message}>{props.messag}</div>
    )
}
export default Message_in;