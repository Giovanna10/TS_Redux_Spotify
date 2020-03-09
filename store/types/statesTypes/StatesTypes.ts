import {Category, Album, CategoryPLaylists, Track, Playlist} from '../actionsTypes/ActionsTypes'

export interface AuthState {
  loading: boolean;
  loggedIn: boolean;
}

export interface TokenState {
  code: string;
  accessToken: string;
  refreshToken: string;
}
export interface UserState {
  display_name: string;
  image: string;
}

export interface HomeState {
  albums: Album[]
}

export interface CategoriesState {
  categoriesList: Category[],
  playlists: CategoryPLaylists[]
}

export interface PlaylistsState {
  playlist: Playlist
}