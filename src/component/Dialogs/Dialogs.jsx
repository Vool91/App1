import React from 'react';
import { useForm } from 'react-hook-form';
import dilmes from'./Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message_in from './Message/Message_in';




const Dialogs =(props) =>{

let state=props.DialogPage;
let dialogsElement=state.dela.map(d =><DialogItem  name={d.name} id={d.id} />);
let MessaElement=state.mes.map(m => <Message_in  messag={m.messag}/>);


const { handleSubmit, register } = useForm();
const onSubmit=(values)=>{
console.log(values.newMessageBody)
 props.SendMassage(values.NewMessageBody);
 

}
const AddMessage=()=>{

    return(
    <form  onSubmit={handleSubmit(onSubmit)} >

<div><textarea  placeholder='Enter messandge'  {...register("NewMessageBody")} name="NewMessageBody"   ></textarea></div>
           <div><button type="submit" >Send</button></div>
    </form>
    )
}

return(

    <div className={dilmes.dialogs}>
        <div className={dilmes.dialog_items}>
            {dialogsElement}
        </div>
       <div className={dilmes.messeges}>
       {MessaElement}
       </div>
      <AddMessage />
    </div>
)

}
export default Dialogs;