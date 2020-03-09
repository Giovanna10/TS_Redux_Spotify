import categories from "../../interceptors/categories/categoriesInterceptor";
import {
  GET_CATEGORIES,
  GET_CATEGORY_PLAYLISTS,
  CategoriesActionInterface,
  Category,
  PlaylistInCategory,
  CategoryPLaylists
} from "../types/actionsTypes/ActionsTypes";

export function getCategoriesAction() {
  return async dispatch => {
    try {
      const { data } = await categories().get("");
      const categoriesArray: CategoriesActionInterface = data.categories.items.map(
        item => {
          return {
            id: item.id,
            icon: item.icons[0],
            name: item.name
          };
        }
      );

      return dispatch({
        type: GET_CATEGORIES,
        payload: categoriesArray
      });
    } catch (error) {
      return undefined;
    }
  };
}

export function getPlaylistsByCategoryAction(categoriesArray: Category[]) {
  return async dispatch => {
    let playlistsData = [];
    try {
      for(let i = 0; i<categoriesArray.length; i++){
        try {
          const result = await categories().get(`/${categoriesArray[i].id}/playlists`);
          playlistsData.push(result)
        } catch (error) {
          console.log(error);
        }
      }
      
      const playlists = playlistsData.map((item, index) => {
        const categoryPlaylists: PlaylistInCategory[] = item.data.playlists.items.map(
          item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.images[0].url,
            totalTracks: item.tracks.total
          })
        );

        const playlist: CategoryPLaylists = {
          title: categoriesArray[index].name,
          data: categoryPlaylists
        };
        return playlist;
      });

      return dispatch({
        type: GET_CATEGORY_PLAYLISTS,
        payload: playlists
      });
    } catch (error) {
      console.log(error);
    }
  };
}
