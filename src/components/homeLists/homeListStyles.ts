import { StyleSheet } from "react-native";

const homeListStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  albumContainer: {
    width: 150,
    flex: 1,
    alignItems: "center",
    margin: 10
  },
  albumTitle: {
    textAlign: "center",
    color: "#fefefe",
    fontSize: 20,
    fontWeight: "bold"
  },
  title: {
    paddingTop: 10,
    color: "#fefefe",
    fontSize: 15,
    fontWeight: "bold"
  },
  artistsContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "row"
  },
  artists: {
    color: "#3e3e3e",
    fontSize: 15
  }
});

export default homeListStyles;
