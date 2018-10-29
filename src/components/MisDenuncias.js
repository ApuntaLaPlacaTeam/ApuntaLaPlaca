import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  TextInput,
  HelperText,
  withTheme,
  Button,
  Card,
  Title,
  Paragraph
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

class MisDenuncias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      denuncias: []
    };
  }

  componentWillMount() {
    fetch(
      `https://apunta-la-placa-backend.herokuapp.com/api/infracciones?dniDenunciante=48342427`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson2 => {
        console.log("responseJson 2: ", responseJson2);
        this.setState({
          denuncias: responseJson2
        });
        //Alert.alert(JSON.parse(responseJson));
        //this.props.navigation.goBack();
      })
      .catch(error => {
        console.log("ERror: 2", error);
        //        Alert.alert(JSON.parse(error));
      });
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
            <ScrollView
              style={{
                flex: 1
              }}>
              {this.state.denuncias.map(item => {
                return (
                  <Card key={item._id} style={{ marginBottom: 10 }}>
                    <Card.Content>
                      <Title>Denuncia</Title>
                      <Paragraph>
                        {item.descripcion} {"\n"} DNI Denunciante:{" "}
                        {item.dniDenunciante}
                      </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: item.linkFoto }} />
                  </Card>
                );
              })}
            </ScrollView>
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
    margin: 8
  }
});

export default withTheme(MisDenuncias);
