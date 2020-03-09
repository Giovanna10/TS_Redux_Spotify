export const AUTH = "AUTH";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const GET_CODE = "GET_CODE";
export const GET_TOKEN = "GET_TOKEN";
export const GET_REFRESH_TOKEN = "GET_REFRESH_TOKEN";
export const GET_USER = "GET_USER";
export const GET_ALBUMS = "GET_ALBUMS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_PLAYLISTS = "GET_CATEGORY_PLAYLISTS";
export const GET_PLAYLISTS = "GET_PLAYLISTS";


//ACTIONS
export interface Action<P> {
  type: string;
  payload: P;
}


//TOKEN ACTIONS
export interface TokenActionInterface {
  code: string;
  token: string;
  refreshToken: string;
}

export interface RefreshTokenActionInterface {
  refreshToken: string;
}


//USER ACTIONS
export interface UserActionInterface {
  displayName: string;
  image: string;
}


//ARTISTS ACTIONS
export type Artist = {
  artistId: string;
  artistName: string;
  type: string;
};

export type Album = {
  id: string;
  albumName: string;
  releaseDate: string;
  artists: Artist[];
  albumsImages: object[];
};

export interface AlbumsActionInterface {
  albums: Album[];
}


//CATEGORIES ACTIONS
export type Category = {
  id: string;
  icon: string;
  name: string;
};

export type PlaylistInCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  totalTracks: number;
};

export type CategoryPLaylists = {
  title: string;
  data: PlaylistInCategory[]
}

export interface CategoriesActionInterface {
  categories: Category[];
}

export interface PlaylistsActionInterface {
  playlists: CategoryPLaylists[];
}

export type CategoriesActionsInterface =
  | CategoriesActionInterface
  | PlaylistsActionInterface;


//PLAYLIST ACTIONS
export type Playlist = {
  id: string;
  name: string;
  followers: number;
  image: string;
  owner: string;
  primaryColor: string;
  tracks: Track[];
}

export type Track = {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
}

export interface PlaylistActionInterface {
  playlist: Playlist
}
