
import { getAuthUser } from "./authReduser";

const SET_INICIALIZETE = 'SET_INICIALIZETE';

let inicializState:inicializStateType = {
  inicializet: false,
};


export type inicializStateType={
  inicializet:boolean
}
const AppReducer = (state:inicializStateType = inicializState, action:any) :inicializStateType=> {

  switch (action.type) {
    case SET_INICIALIZETE:
      return {
        ...state,
        inicializet: true,
  

      };
    default: return state;
  }
}
type setInicializeteType= {
  type: typeof SET_INICIALIZETE
}
export const setInicializete = ():setInicializeteType => {
  return {
    type: SET_INICIALIZETE
  }
};
export const inicialazApp = () => (dispatch:any) => {

  let promise = dispatch(getAuthUser())
  Promise.all([promise])
    .then(() => {
      dispatch(setInicializete())
    })
}




export default AppReducer;