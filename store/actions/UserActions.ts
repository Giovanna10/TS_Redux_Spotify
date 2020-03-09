import user from "../../interceptors/user/userInterceptor";
import { GET_USER } from "../types/actionsTypes/ActionsTypes";
import {UserActionInterface} from '../types/actionsTypes/ActionsTypes'

export function getUserInfoAction() {
  return async dispatch => {
    try{
      const { data } = await user().get("");
    
      const profileImage = data.images[0].url??'';
      const userInfo: UserActionInterface = {
        displayName: data.display_name,
        image: profileImage
      };
      return dispatch({
        type: GET_USER,
        payload: userInfo
      });
    }catch(error){
      return undefined
    }
    
  };
}
