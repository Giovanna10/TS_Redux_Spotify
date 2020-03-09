import { combineReducers } from "redux";
import TokenReducer from "./TokenReducer";
import UserReducer from "./UserReducer";
import HomeTracksReducer from "./HomeTracksReducer";
import CategoriesReducer from "./CategoriesReducer";
import PlaylistsReducer from './PlaylistsReducer'

const combineReducer = combineReducers({
  authData: TokenReducer,
  user: UserReducer,
  homeAlbums: HomeTracksReducer,
  categories: CategoriesReducer,
  playlist: PlaylistsReducer
});

export default combineReducer;
