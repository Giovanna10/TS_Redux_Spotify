import {
  GET_CODE,
  GET_TOKEN,
  GET_REFRESH_TOKEN
} from "../types/actionsTypes/ActionsTypes";
import { Linking } from "react-native";
import axios from "axios";
import qs from "query-string";

export function getCodeAction() {
  Linking.openURL(
    "https://accounts.spotify.com/authorize?client_id=ee4252c942ce40e395b20ffc03d7fb2e&redirect_uri=spotify:%2F%2FtsRedux%2Fcallback&scope=user-read-private%20user-read-email&response_type=code"
  );
  return dispatch => {
    Linking.addEventListener("url", event => {
      const code: string = event.url.split("code=")[1].split("#")[0]

      return dispatch({
        type: GET_CODE,
        payload: { code }
      });
    });
  };
}

export function getInitialTokenAction(code: string) {  
  return async dispatch => {
    const { data } = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "spotify://tsRedux/callback",
        client_id: "ee4252c942ce40e395b20ffc03d7fb2e",
        client_secret: "f9c1c8c524a64b399ecc145781871ecd"
      }),

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );    

    return dispatch({
      type: GET_TOKEN,
      payload: { token: data.access_token, refreshToken: data.refresh_token }
    });
  };
}

export function getRefreshTokenAction(refreshToken: string) {
  return async dispatch => {
    const { data } = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "ee4252c942ce40e395b20ffc03d7fb2e",
        client_secret: "f9c1c8c524a64b399ecc145781871ecd"
      }),

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    return dispatch({
      type: GET_REFRESH_TOKEN,
      payload: { refreshToken: data.refresh_token }
    });
  };
}
