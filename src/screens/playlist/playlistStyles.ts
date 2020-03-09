import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%"
  },
  headerContainer: {
    marginTop: "25%",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "center"
  },
  playlistImage: {
    width: 160,
    height: 160
  },
  playlistName: {
    textTransform: "capitalize",
    color: "#fefefe",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20
  },
  playlistDetails: {
    color: "#e3e3e3",
    fontSize: 12,
    fontWeight: "300",
    textTransform: "uppercase"
  },
  tracksContainer: {},
  listContainer: {
    backgroundColor: "transparent"
  },
  trackContainer: {
    backgroundColor: "#000000",
    paddingLeft: "4%"
  },
  trackText: {
    textTransform: "capitalize",
    color: "#fefefe",
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: "1.5%",
    paddingTop: "2%"
  },
  trackArtist: {
    color: "#e3e3e3",
    fontSize: 15,
    fontWeight: "300",
    paddingBottom: "2%"
  }
});

export default styles;
