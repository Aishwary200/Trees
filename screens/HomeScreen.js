import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Tree-Check AQI of your area </Text>
                <Text>To get AQI press the proceed button</Text>
                <Text>About Trees</Text>
                <Text>Tree is very important to us</Text>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.navigation.navigate('Area')}>
                    <Text>Proceed</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#ff9800',
        shadowColor: '#000',
        marginLeft: 25,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
    },
})
