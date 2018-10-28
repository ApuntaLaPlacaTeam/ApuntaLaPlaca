import React, {Component} from 'react';
import {ScrollView, View, Image, Dimensions, StyleSheet} from 'react-native';
import {Colors, Caption, Searchbar, Appbar} from 'react-native-paper';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
    }

    render() {

        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content title="Wikiredes"/>
                </Appbar.Header>
                <Searchbar
                    placeholder="Buscar término"
                    onChangeText={query => this.setState({query})}
                    value={this.state.query}
                    style={styles.searchbar}
                />
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

export default Search;