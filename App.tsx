import React from "react";
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./src/components/login/Login";
import Home from "./src/screens/home/Home";
import Playlist from "./src/screens/playlist/PlaylistScreen";
import Search from "./src/screens/Search";
import MyLibrary from "./src/screens/MyLibrary";
import store from "./store/Store";
import { StatusBar } from "react-native";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        cardStyle: {
          backgroundColor: "#000000"
        }
      })
    },
    Playlist: {
      screen: Playlist
    }
  },
  { headerMode: "none" }
);

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  { headerMode: "none" }
);

const LibraryStack = createStackNavigator(
  {
    MyLibrary: MyLibrary
  },
  { headerMode: "none" }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  switch (routeName) {
    case "Home":
      return <Icon name="home" size={30} color={tintColor} />;
    case "Search":
      return <Icon name="magnify" size={30} color={tintColor} />;
    case "My Library":
      return <Icon name="bookshelf" size={30} color={tintColor} />;
    default:
      return null;
  }
};

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    MyLibrary: LibraryStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "#fefefe",
      inactiveTintColor: "#6F6F6F",
      style: {
        backgroundColor: "#000000",
        height: 65
      }
    },
    resetOnBlur: true,
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      App: tabNavigator
    },
    { initialRouteName: "Login" }
  )
);

function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor='#fefefe' />
        <AppContainer />
      </Provider>
    </>
  );
}

export default App;
