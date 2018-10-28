import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  TextInput,
  HelperText,
  withTheme
} from "react-native-paper";
import { PermissionsAndroid } from "react-native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000626",
    accent: "#4D548E"
  }
};

export default class CapturaInfractor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: null,
      description: ""
    };
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <Appbar.Header>
            <Appbar.Action
              icon="close"
              onPress={() => this.props.navigation.goBack()}
            />
            <Appbar.Content title="Captura al infractor" />
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
              {this.state.avatarSource ? (
                <View>
                  <Image
                    style={styles.imageResult}
                    source={{ uri: this.state.avatarSource.imageUri }}
                  />
                  <View>
                    <TextInput
                      mode="outlined"
                      style={styles.inputContainerStyle}
                      label="Descripción"
                      placeholder="Descripción"
                      value={this.state.description}
                      onChangeText={description =>
                        this.setState({ description })
                      }
                    />
                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    const ImagePicker = require("react-native-image-picker");

                    var options = {
                      title: "Select an image",
                      storageOptions: {
                        skipBackup: true,
                        path: "images",
                        waitUntilSaved: true
                      },
                      mediaType: "photo",
                      allowsEditing: true,
                      quality: 0.5
                    };

                    /**
                     * The first arg is the options object for customization (it can also be null or omitted for default options),
                     * The second arg is the callback which sends object: response (more info in the API Reference)
                     */
                    ImagePicker.launchCamera(options, response => {
                      if (response.didCancel) {
                        console.log("User cancelled image picker");
                        Alert.alert('"User cancelled image picker"');
                      } else if (response.error) {
                        Alert.alert(response.error);
                        console.log("ImagePicker Error: ", response.error);
                      } else if (response.customButton) {
                        Alert.alert(response.customButton);
                        console.log(
                          "User tapped custom button: ",
                          response.customButton
                        );
                      } else {
                        let source = response.uri;
                        let image = response.data;
                        let type = response.type;
                        let name = response.fileName;

                        if (type == null) {
                          Alert.alert(
                            "Image incorrect.",
                            "The selected image are not usable, please select a downloaded image.",
                            [
                              {
                                text: "OK",
                                onPress: () => console.log("OK Pressed")
                              }
                            ],
                            { cancelable: false }
                          );
                          source = null;
                          image = null;
                          type = null;
                          name = null;
                        } else {
                          this.setState({
                            avatarSource: {
                              imageUri:
                                "data:image/jpeg;base64," + response.data,
                              imageSource: source,
                              imageType: type,
                              imageName: name,
                              image_changed: true,
                              modified: true
                              // imageData: image
                            }
                          });
                        }
                      }
                    });
                  }}>
                  <View style={styles.capturarFoto}>
                    <Image
                      style={styles.image}
                      source={require("../img/camera.png")}
                    />
                    <Text style={styles.text}>REALIZA UNA FOTO</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </LinearGradient>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  capturarFoto: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    width: 125,
    height: 98
  },
  imageResult: {
    width: 300,
    height: 250
  },
  text: {
    marginTop: 15,
    fontSize: 20,
    color: "white"
  },
  inputContainerStyle: {
    margin: 8,
  }
});
