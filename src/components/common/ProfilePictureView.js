import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { TOUCHABLE_OPACITY, TOOLBAR_HEIGHT } from "./styles/dimens";

const IMAGE_SIZE = 36;

const ProfilePictureView = () => (
  <TouchableOpacity
    activeOpacity={TOUCHABLE_OPACITY}
    style={styles.touchableContainer}
  >
    <Image style={styles.image} source={require("../common/icons/man.png")} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchableContainer: {},
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2
  }
});

export { ProfilePictureView };
