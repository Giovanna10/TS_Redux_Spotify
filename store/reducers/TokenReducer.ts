import {
  GET_TOKEN,
  GET_CODE,
  GET_REFRESH_TOKEN
} from "../types/actionsTypes/ActionsTypes";

import {TokenState} from '../types/statesTypes/StatesTypes'
import {Action, TokenActionInterface} from '../types/actionsTypes/ActionsTypes'

const initialState: TokenState = {
  code: "",
  accessToken: "",
  refreshToken: ""
};

export default function(
  state: TokenState = initialState,
  action: Action<TokenActionInterface>
): TokenState {
  
  switch (action.type) {
    case GET_CODE:
      return { ...state, code: action.payload.code };
    case GET_TOKEN:
      return {
        ...state,
        accessToken: action.payload.token,
        refreshToken: action.payload.refreshToken
      };
    case GET_REFRESH_TOKEN:
      return { ...state, refreshToken: action.payload.refreshToken };

    default:
      return state;
  }
}
