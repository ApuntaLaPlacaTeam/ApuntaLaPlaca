/** @format */

import { name as appName } from "./app.json";
import * as React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Navigator } from "./src/components/my_navigation";

import { Provider } from "react-redux";
import configureStore from "./src/services/store";

let store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0082E9",
    accent: "#9B9B9B"
  }
};

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
