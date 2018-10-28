import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000626",
    accent: "#4D548E"
  }
};

export default class Options extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Appbar.Content title="Principal" />
          </Appbar.Header>
          <LinearGradient
            colors={["#000626", "#29346C"]}
            style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate("Captura al infractor");
                  }}>
                  <View style={styles.itemMenu}>
                    <Image
                      style={styles.itemMenuImage}
                      source={require("../img/person.png")}
                    />
                    <Text style={styles.itemMenuText}>
                      CAPTURA
                      {"\n"}
                      AL INFRACTOR
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.itemMenu}>
                  <Text style={[styles.itemMenuText, styles.textAlignLeft]}>
                    MAPA
                    {"\n"}
                    DE INFRACCIONES
                  </Text>
                  <Image
                    style={styles.itemMenuImage}
                    source={require("../img/map.png")}
                  />
                </View>
                <View style={styles.itemMenu}>
                  <Image
                    style={styles.itemMenuImage}
                    source={require("../img/resume.png")}
                  />
                  <Text style={styles.itemMenuText}>MIS DENUNCIA</Text>
                </View>
              </View>
              <View style={styles.itemMenu}>
                <Text style={[styles.itemMenuText, styles.footer]}>
                  EDHACKATON - ALPTEAM
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemMenuText: {
    color: "white",
    width: 180,
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10
  },
  textAlignLeft: {
    textAlign: "left",
    marginRight: 10,
    marginLeft: 0
  },
  itemMenuImage: {
    width: 120,
    height: 120
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    width: "100%",
    marginLeft: 0
  }
});
