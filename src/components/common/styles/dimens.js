import { Platform, Dimensions } from "react-native";

export const TOOLBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
export const TOUCHABLE_OPACITY = 0.6;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
