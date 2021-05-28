
import React from 'react';
import LoadinGif from '../../assets/images/load.gif';
import us from '../../component/User/Users.module.css';

let Preloder=(props)=>{
return <div><img src={LoadinGif} 
 className={us.load} />

</div>
}
export default Preloder;
