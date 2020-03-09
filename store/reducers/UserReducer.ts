import {
  GET_USER,
  Action,
} from "../types/actionsTypes/ActionsTypes";

import {UserActionInterface} from '../types/actionsTypes/ActionsTypes'
import {UserState} from '../types/statesTypes/StatesTypes'

const initialState: UserState = {
    display_name: "",
    image: "" 
};

export default function(
  state: UserState = initialState,
  action: Action<UserActionInterface>
): UserState {
  switch (action.type) {
    case GET_USER:
      return { ...state, display_name: action.payload.displayName, image: action.payload.image };

    default:
      return state;
  }
}
