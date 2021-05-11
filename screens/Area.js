import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions'

export default class Area extends Component {
    constructor() {
        super()
        this.state = {
            hasPermission: null,
            lat: '',
            lng: ''
        }
    }
    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
        this.setState({
            hasPermission: status === 'granted',
        }, () => {
            this.getLocation()
        })

    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);

        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    geoSuccess = (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        this.setState({
            lat: lat,
            lng: lng
        })
    }
    geoError() {
        alert("Geocoder failed.");
    }
    render() {
        const hasPermission = this.state.hasPermission
        if (hasPermission === null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Tree-Check AQI of your area </Text>
                    <TouchableOpacity style={styles.button} onPress={this.getLocationPermission}>
                        <Text>Get AQI</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else if (hasPermission === true) {
            return (
                <View>
                    <Text style={styles.title}>Tree-Check AQI of your area </Text>
                    <Text>lat: {this.state.lat} lng:{this.state.lng}</Text>
                </View>
            )
            // this.getLocation()

        }
    }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#964B00',
        width: 800,
        height: 500
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'green',
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
})
