import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  StatusBar,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { AppState } from "../../../store/Store";
import {
  getCodeAction,
  getInitialTokenAction
} from "../../../store/actions/AuthActions";
import logo from "../../assets/spotifyLogo.png";

interface LoginProps {
  navigation: NavigationStackProp;
  getCode: typeof getCodeAction;
  code: string;
  getToken: typeof getInitialTokenAction;
  token: string;
}

const Login: React.FC<LoginProps> = ({
  navigation,
  getCode,
  code = "",
  getToken,
  token
}) => {
  useEffect(() => {
    if (code.length !== 0 && token.length === 0) {
      getToken(code);
    }
    if (code.length !== 0 && token.length !== 0) {
      navigation.navigate("Home");
    }
  }, [code, token, getToken]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {code.length === 0 && token.length === 0 && (
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={{ width: 100, height: 100 }} />
          </View>
          <View style={styles.buttonContainer}>
            <Button color="#fefefe" title="LOGIN" onPress={() => getCode()} />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  logoContainer: {
    paddingBottom: "40%"
  },
  buttonContainer: {
    backgroundColor: "#1DB954",
    borderRadius: 20,
    paddingHorizontal: 40
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    code: state.authData.code,
    token: state.authData.accessToken
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  getCode: () => dispatch(getCodeAction()),
  getToken: (code: string) => dispatch(getInitialTokenAction(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
