import React, { Component } from "react";
import { FlatList, View, SafeAreaView, StyleSheet } from "react-native";
import { FeedListRow } from "./FeedListRow";
import { VeryLightGray } from "../../const/colors";

class FeedListView extends Component {
  dataSrc = [{}, {}, {}, {}, {}, {}, {}];

  renderRow = () => <FeedListRow />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.dataSrc}
          renderItem={this.renderRow}
          ItemSeparatorComponent={this.renderSeperator}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 8 }}
        />
      </SafeAreaView>
    );
  }

  renderSeperator = () => <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1
  },
  seperator: {
    height: 1,
    backgroundColor: VeryLightGray,
    marginHorizontal: 16
  }
});

export { FeedListView };
