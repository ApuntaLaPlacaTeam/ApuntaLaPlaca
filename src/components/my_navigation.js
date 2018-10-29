import {
  createStackNavigator,
  NavigationActions,
  createTabNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import App from "./App";
import Options from "./Options";
import CapturaInfractor from "./CapturaInfractor";
import React from "react";
import DrawerItems from "./DrawerItems";
import createReactContext from "create-react-context";
import MisDenuncias from "./MisDenuncias";

const PreferencesContext = createReactContext();

const Main = createDrawerNavigator(
  {
    Principal: Options,
    "Captura al infractor": CapturaInfractor,
    "Mis denuncias": MisDenuncias
  },
  {
    drawerPosition: "left",
    navigationOptions: { header: null }
  }
);

export const Navigator = createStackNavigator(
  {
    Main: { screen: Main }
  },
  { initialRouteName: "Main", navigationOptions: { header: null } }
);
