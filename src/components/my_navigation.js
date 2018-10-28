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

const PreferencesContext = createReactContext();

const Main = createDrawerNavigator(
  {
    Principal: Options,
    "Captura al infractor": { screen: CapturaInfractor }
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
