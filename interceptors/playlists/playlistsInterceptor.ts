import axios from "axios";
import store from "../../store/Store";
import { API_HOST_PLAYLISTS as PLAYLISTS } from "react-native-dotenv";

function playlists() {
const state = store.getState();
  return axios.create({
    timeout: 2000,
    baseURL: PLAYLISTS,
    headers: { Authorization: "Bearer " + state.authData?.accessToken }
  });
}

export default playlists
