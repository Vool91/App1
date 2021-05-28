import { addPostActionCreate } from '../../../Redux/profileReducer';
import Myposts from './Mypost'
import { connect } from 'react-redux';



const mapStateToProps=(state)=>{

return{
  ProfilePage:state.ProfilePage,
  newPostText:state.ProfilePage.newPostText
};

}
const mapDicpatchToProps=(dispatch)=>{

  return{
    Add:(newPostText)=>{dispatch(addPostActionCreate(newPostText))},
  
  }
};
const MypostsContainer =connect(mapStateToProps,mapDicpatchToProps)(Myposts);

export default MypostsContainer;