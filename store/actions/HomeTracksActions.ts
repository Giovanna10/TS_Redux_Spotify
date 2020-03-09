import albums from "../../interceptors/newReleases/albumsInterceptor";
import {
  GET_ALBUMS,
  AlbumsActionInterface,
} from "../types/actionsTypes/ActionsTypes";

export function getNewAlbums() {
  return async dispatch => {
    try {
      const { data } = await albums().get("");

      const newAlbums: AlbumsActionInterface = data.albums.items.map(item => {
        const artistsArrays = item.artists.map(artist => {
          return {
            artistId: artist.id,
            artistName: artist.name,
            type: artist.type
          };
        });
        const artists = [].concat.apply([], artistsArrays);
        return {
          id: item.id,
          albumName: item.name,
          releaseDate: item.release_date,
          artists: artists,
          albumsImages: item.images
        };
      });

      return dispatch({
        type: GET_ALBUMS,
        payload: newAlbums
      });
    } catch (error) {
      return undefined;
    }
  };
}
