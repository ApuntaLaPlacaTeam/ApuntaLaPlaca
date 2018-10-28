/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StatusBar, I18nManager, AsyncStorage, Platform } from "react-native";
import createReactContext from "create-react-context";
import { createDrawerNavigator, StackNavigator } from "react-navigation";


import Options from "./Options";
import CapturaInfractor from "./CapturaInfractor";

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


/* 
import {ScrollView, View, Image, Dimensions, StyleSheet, StatusBar} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Search from "./Search";
import History from "./History";
import { Text } from 'react-native';
import Team from './Team';
import { StackNavigator } from 'react-navigation';

type Props = {};

const PhotoGallery = ({route}) => {
    const PHOTOS = Array.from({length: 24}).map(
        (_, i) => `https://unsplash.it/300/300/?random&__id=${route.key}${i}`
    );

    return (
        <ScrollView contentContainerStyle={styles.content}>
            {PHOTOS.map(uri => (
                <View key={uri} style={styles.item}>
                    <Image source={{uri}} style={styles.photo}/>
                </View>
            ))}
        </ScrollView>
    );
};
 */
export default class App extends Component {
  state = {
    theme: theme,
    rtl: I18nManager.isRTL
  };

  async componentDidMount() {
    StatusBar.setBarStyle("light-content");

    try {
      const prefString = await AsyncStorage.getItem("preferences");
      const preferences = JSON.parse(prefString);

      if (preferences) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState(state => ({
          theme: preferences.theme === "dark" ? DarkTheme : DefaultTheme,
          rtl:
            typeof preferences.rtl === "boolean" ? preferences.rtl : state.rtl
        }));
      }
    } catch (e) {
      // ignore error
    }
  }

  _savePreferences = async () => {
    try {
      AsyncStorage.setItem(
        "preferences",
        JSON.stringify({
          theme: this.state.theme === DarkTheme ? "dark" : "light",
          rtl: this.state.rtl
        })
      );
    } catch (e) {
      // ignore error
    }
  };

  _toggleTheme = () =>
    this.setState(
      state => ({
        theme: state.theme === DarkTheme ? DefaultTheme : DarkTheme
      }),
      this._savePreferences
    );

  _toggleRTL = () =>
    this.setState(
      state => ({
        rtl: !state.rtl
      }),
      async () => {
        await this._savePreferences();

        I18nManager.forceRTL(this.state.rtl);
        Util.reload();
      }
    );

  render() {
    return (
      <PaperProvider theme={this.state.theme}>
        <PreferencesContext.Provider
          value={{
            theme: this._toggleTheme,
            rtl: this._toggleRTL,
            isRTL: this.state.rtl,
            isDarkTheme: this.state.theme === DarkTheme
          }}>
          <AppStack />
        </PreferencesContext.Provider>
      </PaperProvider>
    );
  }
}
