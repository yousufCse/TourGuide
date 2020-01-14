import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { White, VeryLightGray } from "../const/colors";
import { HighlitedListView, FeedListView } from "./common";

class ToursTabRoute extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <HighlitedListView />
            <View style={styles.contentDivider} />
            <FeedListView />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White
  },
  contentDivider: {
    height: 8,
    backgroundColor: VeryLightGray
  }
});

export default ToursTabRoute;
