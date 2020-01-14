import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import HomeScreen from "./src/components/HomeScreen";
import { White } from "./src/const/colors";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White
  }
});
