import React, { Component } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { White } from "../../const/colors";
import { HighlitedListRow } from "./HighlitedListRow";
import { ROBOTO_MEDIUM } from "../../const/fonts";

class HighlitedListView extends Component {
  dataSrc = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  renderRow = () => {
    return <HighlitedListRow />;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.promotionsText}>Promotions</Text>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16 }}
          horizontal
          data={this.dataSrc}
          renderItem={this.renderRow}
          ItemSeparatorComponent={this.renderSeperator}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  renderSeperator = () => <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16, //24
    backgroundColor: White
  },
  promotionsText: {
    marginBottom: 16,
    paddingLeft: 16,
    fontSize: 14,
    fontFamily: ROBOTO_MEDIUM
  },

  seperator: {
    width: 16
  }
});

export { HighlitedListView };
