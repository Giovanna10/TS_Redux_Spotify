import { CategoriesState } from "../types/statesTypes/StatesTypes";
import {
  GET_CATEGORIES,
  GET_CATEGORY_PLAYLISTS,
  Action,
  CategoriesActionsInterface,
} from "../types/actionsTypes/ActionsTypes";

const initialState: CategoriesState = {
  categoriesList: [],
  playlists: []
};

export default function(
  state: CategoriesState = initialState,
  action: Action<CategoriesActionsInterface>
) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload
      };
    case GET_CATEGORY_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload
      };
    default:
      return state;
  }
}
