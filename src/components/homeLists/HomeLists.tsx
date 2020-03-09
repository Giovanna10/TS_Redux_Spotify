import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { PlaylistInCategory } from "../../../store/types/actionsTypes/ActionsTypes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getPlaylistById } from "../../../store/actions/PlaylistsActions";
import { connect } from "react-redux";
import { useNavigation } from "../../utils/hooks/useNavigation";
import homeListStyles from './homeListStyles'

type ScreenProps = {
  getPlaylist: typeof getPlaylistById;
  listKey: string;
  title: string;
  elements: PlaylistInCategory[];
};

const HomeLists: React.FC<ScreenProps> = ({
  getPlaylist,
  listKey,
  title,
  elements
}) => {
  const styles = homeListStyles
  const navigation = useNavigation();

  const playlistTracks = (id: string) => {
    getPlaylist(id);
    navigation.navigate("Playlist", { id: id });
  };

  const renderElements = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => playlistTracks(item.id)}
        style={styles.albumContainer}
      >
        <Image
          style={{
            width: 150,
            height: 150
          }}
          source={{
            uri: item.image
          }}
        />
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <View style={styles.artistsContainer}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.artists}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View key={listKey} style={styles.container}>
      <Text style={styles.albumTitle}>{title}</Text>
      <FlatList
        data={elements}
        keyExtractor={item => item.id}
        renderItem={renderElements}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  getPlaylist: (id: string) => dispatch(getPlaylistById(id))
});

export default connect(null, mapDispatchToProps)(HomeLists);
