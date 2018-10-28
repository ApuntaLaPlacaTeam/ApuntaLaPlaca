import React, { Component } from "react";
import { ScrollView, View, Image, Dimensions, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

class Team extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Equipo" />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Team;
