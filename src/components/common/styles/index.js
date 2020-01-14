import { AppColor, Black } from "../../../const/colors";

export const getElevationShadowStyle = elevation => {
  return {
    elevation,
    shadowColor: Black,
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
};

export const tabBarStyle = {
  backgroundColor: AppColor,
  ...getElevationShadowStyle(4)
};
