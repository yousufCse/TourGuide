import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { White } from "../const/colors";
import { Toolbar } from "./common/";
import TabNavigator from "./TabNavigator";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <TabNavigator />
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

export default HomeScreen;
