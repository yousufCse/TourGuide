import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { White } from "../../const/colors";
import { TOUCHABLE_OPACITY } from "./styles/dimens";
import { ROBOTO_REGULAR, ROBOTO_LIGHT } from "../../const/fonts";

const IMAGE_SIZE = 24;

const FeedListRow = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={TOUCHABLE_OPACITY}
    >
      {/* Header Content */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../common/icons/default_pic.png")}
        />
        <Text style={styles.title}>Title name Here</Text>
      </View>
      {/* Content Details */}
      <Text style={styles.contentDetails} numberOfLines={2}>
        {contentText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: White
  },

  headerContainer: {
    flexDirection: "row",
    marginBottom: 8
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2
  },

  title: {
    marginLeft: 8,
    fontSize: 13,
    fontFamily: ROBOTO_REGULAR
  },

  contentDetails: {
    fontSize: 12,
    fontFamily: ROBOTO_LIGHT
  }
});

const contentText =
  "Determines how to resize the image when the frame doesn't match the raw image dimensions" +
  "cover: Scale the image uniformly (maintain the image's aspect ratio) so th" +
  "t both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).";

export { FeedListRow };
