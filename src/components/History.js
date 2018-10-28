import React, {Component} from 'react';
import {ScrollView, View, Image, Dimensions, StyleSheet} from 'react-native';
import {Colors, Caption, Searchbar, Appbar} from 'react-native-paper';

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content title="Historial de busquedas"/>
                </Appbar.Header>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey200,
    },
    caption: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    searchbar: {
        margin: 4,
    },
});

export default History;