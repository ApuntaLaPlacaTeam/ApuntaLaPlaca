import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  Drawer,
  withTheme,
  Switch,
  TouchableRipple,
  Text,
  Colors
} from "react-native-paper";

const DrawerItemsData = [
  { label: "Principal", key: "Option" },
  { label: "Captura al infractor", key: "CapturaInfractor" },
  { label: "Mapa de tu localidad", key: 2 },
  { label: "Mis denuncias", key: 3 },
  { label: "Equipo", key: 4 }
];

class DrawerItems extends Component {
  state = {
    open: false,
    drawerItemIndex: "Option"
  };

  _setDrawerItem = index => this.setState({ drawerItemIndex: index });

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={[styles.drawerContent, { backgroundColor: colors.surface }]}>
        <Drawer.Section title="Apunta la placa">
          {DrawerItemsData.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              theme={
                props.key === 3
                  ? { colors: { primary: Colors.tealA200 } }
                  : undefined
              }
              active={this.state.drawerItemIndex === index}
              onPress={() => this._setDrawerItem(index)}
            />
          ))}
        </Drawer.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 22
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

export default withTheme(DrawerItems);
