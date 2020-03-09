import { PlaylistsState } from "../types/statesTypes/StatesTypes";
import {
  Action,
  PlaylistActionInterface,
  GET_PLAYLISTS
} from "../types/actionsTypes/ActionsTypes";

const initialState: PlaylistsState = {
  playlist: {
    id: "",
    name: "",
    primaryColor: "",
    image: "",
    owner: "",
    followers: null,
    tracks: []
  }
};

export default function(
  state: PlaylistsState = initialState,
  action: Action<PlaylistActionInterface>
) {
  switch (action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlist: action.payload
      };
    default:
      return state;
  }
}
