import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SafeAreaView, FlatList } from "react-native";
import { AppState } from "../../../store/Store";
import { useNavigation } from "../../utils/hooks/useNavigation";
import { getUserInfoAction } from "../../../store/actions/UserActions";
import { Spinner } from "../../components/spinner/Spinner";
import { getNewAlbums } from "../../../store/actions/HomeTracksActions";
import HomeLists from "../../components/homeLists/HomeLists";
import {
  getCategoriesAction,
  getPlaylistsByCategoryAction
} from "../../../store/actions/CategoriesActions";
import {
  Category,
  CategoryPLaylists,
  Album
} from "../../../store/types/actionsTypes/ActionsTypes";
import homeStyles from "./homeStyles";
import { getPlaylistById } from "../../../store/actions/PlaylistsActions";

type HomeProps = {
  token: string;
  getUserInfo: typeof getUserInfoAction;
  userName: string;
  userImage: string;
  getAlbums: typeof getNewAlbums;
  albums: Album[];
  getCategories: typeof getCategoriesAction;
  categories: Category[];
  getCategoryPlaylists: typeof getPlaylistsByCategoryAction;
  playlists: CategoryPLaylists[];
  getPlaylist: typeof getPlaylistById
};

const Home: React.FC<HomeProps> = ({
  token = "",
  getUserInfo,
  userName = "",
  userImage = "",
  getAlbums,
  albums,
  getCategories,
  categories,
  getCategoryPlaylists,
  playlists,
  getPlaylist
}) => {
  const styles = homeStyles;

  /* useEffect(() => {
    if (userName.length === 0 && userImage.length === 0) {
      getUserInfo();
    }
  }, [token, userName, userImage, getUserInfo]);
 */
  useEffect(() => {
    if (albums.length === 0) {
      getAlbums();
    }
  }, [token, albums, getAlbums]);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, [token, getCategories, categories]);

  useEffect(() => {
    if (categories.length !== 0 && playlists.length === 0) {
      getCategoryPlaylists(categories);
    }
  }, [categories]);


  const renderLists = ({ item }) => {
    return (
      <HomeLists listKey={item.title} title={item.title} elements={item.data} />
    );
  };

  return (
    <>
      {albums.length !== 0 && playlists.length !== 0 ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={item => item.title}
            data={playlists}
            renderItem={renderLists}
          />
        </SafeAreaView>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  token: state.authData.accessToken,
  userName: state.user.display_name,
  userImage: state.user.image,
  albums: state.homeAlbums.albums,
  categories: state.categories.categoriesList,
  playlists: state.categories.playlists
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfoAction()),
  getAlbums: () => dispatch(getNewAlbums()),
  getCategories: () => dispatch(getCategoriesAction()),
  getCategoryPlaylists: (categories: Category[]) =>
    dispatch(getPlaylistsByCategoryAction(categories)),
  getPlaylist: (id: string) => dispatch(getPlaylistById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
