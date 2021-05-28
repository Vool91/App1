import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import subReducer from "./subReducer";

let store= {

_callSubs(){
  return this._state;
},
 getState(){
return this._state;
  } 
  
 ,   
    
    dispatch(action){

      this._state.ProfilePage= profileReducer( this._state.ProfilePage, action)
      this._state.DialogPage= dialogReducer( this._state.DialogPage, action)
      this._state.subcribe= subReducer(this._state.subcribe,action)
this._callSubs(this._state)
    },
  _state:{
    ProfilePage:{postmess:[{id:1, message :'Hello ', сount:15}
    ,{id:2,message :'Its my first post ', сount:22}
    ,{id:3,message :'Its my first sss ', сount:44} 
    ,{id:4,message :'Itss ', сount:555}, ],newPostText:""},

   DialogPage:{
   dela:[{name:'Valeda',id:1 },
    {name:'Ant', id:2},
    {name:'Anton', id:3},
    {name:'Semen', id:4},
    {name:'Sasha', id:5}],
    mes:[{ id:1,messag:'Hahah'},
    {id:2,messag:'Lol'},
    {id:31,messag:'Common'},{id:4,messag:'Kitty'}
    ,{id:5,messag:'Madagascar'}] 
  ,NewMessageBody:""},  subscribe(observer){
      this._callSubs = observer;
    }
  } 


  
}



 window.store = store;
export default store;
