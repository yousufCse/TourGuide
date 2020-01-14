import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ToursTabRoute from "./ToursTabRoute";
import { White, InactiveTab } from "../const/colors";
import {
  TourIcon,
  AccomodationIcon,
  WeddingIcon,
  TransferIcon
} from "./common/icons";
import { tabBarStyle } from "./common/styles";

const ICON_TOURS = "ICON_TOURS";
const ICON_TRASNFERS = "ICON_TRASNFERS";
const ICON_ACCOMODATIONS = "ICON_ACCOMODATIONS";
const ICON_WEDDING = "ICON_WEDDING";

const AccomodationsTabScreen = () => (
  <View style={[styles.scene, { backgroundColor: White }]} />
);

const TransfersTabScreen = () => (
  <View style={[styles.scene, { backgroundColor: White }]} />
);

const WeddingTabScreen = () => (
  <View style={[styles.scene, { backgroundColor: White }]}>
    <WeddingIcon width={200} height={200} />
  </View>
);

const routeList = [
  { key: "tours", title: "Tours", icon: ICON_TOURS },
  { key: "transfers", title: "Transfers", icon: ICON_TRASNFERS },
  { key: "accomodations", title: "Accomodations", icon: ICON_ACCOMODATIONS },
  { key: "wedding", title: "Wedding", icon: ICON_WEDDING }
];

class TabNavigator extends Component {
  state = {
    index: 0,
    routes: routeList
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={this._renderTabBar}
      />
    );
  }

  _renderScene = SceneMap({
    tours: ToursTabRoute,
    transfers: TransfersTabScreen,
    accomodations: AccomodationsTabScreen,
    wedding: WeddingTabScreen
  });

  _renderTabBar = props => {
    return (
      <TabBar
        // scrollEnabled
        {...props}
        inactiveColor={InactiveTab}
        indicatorStyle={styles.indicatorStyle}
        style={tabBarStyle}
        renderIcon={this._renderIcon}
        renderLabel={this._renderLabel}
      />
    );
  };

  _renderIcon = ({ route, color }) => {
    switch (route.icon) {
      case ICON_TOURS:
        return <TourIcon fill={White} />;
      case ICON_TRASNFERS:
        return <TransferIcon />;
      case ICON_ACCOMODATIONS:
        return <AccomodationIcon />;
      case ICON_WEDDING:
        return <WeddingIcon />;
    }
  };

  _renderLabel = ({ route, focused, color }) => {
    return null;
    // return <Text style={{ color }}>{route.title}</Text>;
  };
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },

  indicatorStyle: {
    backgroundColor: White,
    height: 3
  }
});

export default TabNavigator;
