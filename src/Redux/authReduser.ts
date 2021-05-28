import { AutAPI } from "../api/api";

const SET_USER_DATA = "myApp/auth/SET_USER_DATA";
const GET_CAPTHA = "myApp/auth/GET_CAPTHA";

export type inicializStateType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  captohaUrl: null | string;
};
let inicializState: inicializStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captohaUrl: null,
};

const authReducer = (
  state = inicializState,
  action: any
): inicializStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case GET_CAPTHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
type PayloadAuthUserType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
};

type setAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: PayloadAuthUserType;
};
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataType => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

type getCaphaOkType = {
  type: typeof GET_CAPTHA;
  payload: { captohaUrl: string };
};
export const getCaphaOk = (captohaUrl: string): getCaphaOkType => {
  return {
    type: GET_CAPTHA,
    payload: { captohaUrl },
  };
};

export const getAuthUser = () => async (dispatch: any) => {
  let response = await AutAPI.getHaeder();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const LoginSend = (
  email: string | null,
  password: string | null,
  rememberMe: boolean,
  captcha: string | null
) => async (dispatch: any) => {
  let response = await AutAPI.SendAuth(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaphaURL());
    }
  }
};
export const getCaphaURL = () => async (dispatch: any) => {
  debugger;
  let response = await AutAPI.getCapha();
  const captohaUrl = response.data.url;

  dispatch(getCaphaOk(captohaUrl));
};
export const Logout = () => async (dispatch: any) => {
  let response = await AutAPI.deletAuth();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
