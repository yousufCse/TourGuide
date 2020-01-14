import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { TOOLBAR_HEIGHT } from "./styles/dimens";
import { AppColor, White, Red } from "../../const/colors";
import { ProfilePictureView } from "./ProfilePictureView";
import { ROBOTO_MEDIUM } from "../../const/fonts";

class Toolbar extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: AppColor }}>
        <StatusBar backgroundColor={AppColor} barStyle={"light-content"} />
        <View style={styles.container}>
          <Text style={styles.appName}>Tour Guide</Text>
          <ProfilePictureView />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: TOOLBAR_HEIGHT,
    backgroundColor: AppColor
  },

  appName: {
    color: White,
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 16
  }
});

export { Toolbar };
