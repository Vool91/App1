import profileReducer, { addPostActionCreate } from "./profileReducer";
 let state ={
  postmess:[{id:1, message :'Hello ', сount:15}
  ,{id:2,message :'Its my first post ', сount:22}
  ,{id:3,message :'Its my first sss ', сount:44} 
  ,{id:4,message :'Itss ', сount:555}, ],
  
};
it('new post shoud be inc'), () => {
 let action =addPostActionCreate('atlichno')

 let newState= profileReducer(state,action)

 expect(newState.postmess.length).toBe(5)
}

