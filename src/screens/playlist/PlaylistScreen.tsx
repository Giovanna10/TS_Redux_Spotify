import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../store/Store";
import {
  Playlist,
  Artist
} from "../../../store/types/actionsTypes/ActionsTypes";
import styles from "./playlistStyles";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";

type ScreenProps = {
  playlist: Playlist;
};

const PlaylistScreen: React.FC<ScreenProps> = ({ playlist }) => {
  const { name, followers, image, owner, primaryColor, tracks } = playlist;
  const gradientColor = primaryColor ? primaryColor : "#352e42";

  const renderTrack = ({ item, index }) => (
    <View style={[styles.trackContainer, index === 0 && { marginTop: "90%" }]}>
      <Text style={styles.trackText}>{item.name}</Text>
      <Text style={styles.trackArtist}>
        {item.artists?.map((artist: Artist, index: number) => {
          return index < item.artists.length - 1
            ? artist.artistName + " • "
            : artist.artistName;
        })}
      </Text>
    </View>
  );

  return (
    <LinearGradient
      colors={[`${gradientColor}`, "#000000"]}
      start={{ x: 1, y: -0.5 }}
      end={{ x: 1, y: 0.8 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Image style={styles.playlistImage} source={{ uri: image }} />
        <Text style={styles.playlistName}>{name}</Text>
        <Text style={styles.playlistDetails}>
          di {owner} • {followers} follower
        </Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={tracks}
        renderItem={renderTrack}
        keyExtractor={item => item.id}
      />
    </LinearGradient>
  );
};

const mapStateToProps = (state: AppState) => ({
  playlist: state.playlist.playlist
});

export default connect(mapStateToProps, null)(PlaylistScreen);
