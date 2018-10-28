/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, View, Image, Dimensions, StyleSheet, StatusBar} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Search from "./Search";
import History from "./History";

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

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {
                    key: 'search',
                    title: 'Busqueda',
                    icon: 'search',
                    color: '#1D88E5'
                },
                {
                    key: 'history',
                    title: 'Historial',
                    icon: 'access-time',
                    color: '#1D88E5',
                },
                {
                    key: 'team',
                    title: 'Equipo',
                    icon: 'people',
                    color: '#1D88E5',
                },
            ],
        };
    }

    render() {
        StatusBar.setBarStyle('light-content');
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={index => this.setState({index})}
                renderScene={BottomNavigation.SceneMap({
                    search: Search,
                    history: History,
                    team: PhotoGallery,
                })}
            />
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
    },
    item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
});