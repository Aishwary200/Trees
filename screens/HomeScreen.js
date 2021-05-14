import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>AQI-Check AQI of your area </Text>
                <Text style={{ fontWeight: 'bold' }}>To get AQI press the proceed button</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>About Trees</Text>
                <Text style={styles.text}>There are many different types of trees that grow.
                Trees are food for man and all herbivorous animals.
                The roots, stems, leaves, flowers, fruits and seeds of trees may be edible.
                Trees are also home to many wildlife species.
                Animals seek the shade and shelter of trees.
                Birds build their nests in trees.
                Reptiles and insects also live in trees.
                Trees help in binding the soil.
                Trees and forests also play a role in maintaining the hydrological cycle and rainfall patterns.
                Trees are Nature’s bounty.
                We must not cut down trees.
                We must protect trees, and help grow more trees</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('Area')}>
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
        fontWeight: 'bold',
        paddingTop: -100
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        height: 600
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
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
    },
    text: {
        marginTop: 10,
        paddingTop: 3,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
        fontFamily: 'Algerian'
    }
})
