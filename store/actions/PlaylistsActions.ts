import playlists from "../../interceptors/playlists/playlistsInterceptor";
import {
  GET_PLAYLISTS,
  Track,
  Album,
  Artist
} from "../types/actionsTypes/ActionsTypes";

export function getPlaylistById(id: string) {
  return async dispatch => {

    const {data} = await playlists().get(`${id}`)
    
    const tracks: Track[] = data.tracks.items.map(item => {
      const artists: Artist[] = item.track.artists?.map(artist => ({
        artistId: artist.id,
        artistName: artist.name,
        type: artist.type
      }));
      const album: Album = {
        id: item.track.album.id,
        albumName: item.track.album.name,
        releaseDate: item.track.album.release_date,
        artists: item.track.album.artists,
        albumsImages: item.track.album.images
      };
      return {
        id: item.track.id,
        name: item.track.name,
        album: album,
        artists: artists
      };
    });

    const playlist = {
        id: data.id,
        name: data.name,
        followers: data.followers.total,
        image: data.images[0]?.url,
        owner: data.owner.display_name,
        primaryColor: data.primary_color,
        tracks: tracks
    }

    return dispatch({
      type: GET_PLAYLISTS,
      payload: playlist
    });
  };
}
