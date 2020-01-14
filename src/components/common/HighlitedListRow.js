import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { Gray, White } from "../../const/colors";
import { TOUCHABLE_OPACITY, SCREEN_WIDTH } from "./styles/dimens";
import { getElevationShadowStyle } from "./styles";
import { ROBOTO_MEDIUM } from "../../const/fonts";

const ROW_WIDHT = SCREEN_WIDTH > 450 ? 343 : SCREEN_WIDTH - 32;
const BORDER_RADIUS = 4;

const HighlitedListRow = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={TOUCHABLE_OPACITY}
    >
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../common/icons/cbazar.jpg")}
        />
      </View>
      {/* Bottom Text */}
      <Text numberOfLines={1} style={styles.text}>
        Up 70% discount, Click here...
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    borderColor: Gray,
    borderWidth: 0.5,
    width: ROW_WIDHT,
    backgroundColor: White,
    ...getElevationShadowStyle(2)
  },

  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  },

  image: {
    height: 200,
    width: null,
    resizeMode: "stretch"
  },

  text: {
    marginVertical: 8,
    marginHorizontal: 16,
    width: null,
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 12
  }
});

export { HighlitedListRow };
