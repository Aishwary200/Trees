import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions'


export default class Area extends Component {
    constructor() {
        super()
        this.state = {
            hasPermission: null,
            lat: '',
            lng: '',
            aqi: '',
            city: ''
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
    Aqiscreen = async (lat, lng) => {
        var AQI = await fetch('https://api.weatherbit.io/v2.0/current/airquality?lat=' + lat + '&lon=' + lng + '&key=f61448d0bec84f3da88005b10afe56d9')
        var AQIJson = await AQI.json();
        var aqi = AQIJson.data[0].aqi;
        var cityName = AQIJson.city_name;
        this.setState({
            aqi: aqi,
            city: cityName
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
        }, () => {
            this.Aqiscreen(this.state.lat, this.state.lng)
        })

    }
    geoError() {
        alert("Geocoder failed.");
    }
    componentDidMount() {
        this.getLocationPermission()
    }
    render() {
        const hasPermission = this.state.hasPermission
        if (hasPermission === null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Loading ...</Text>
                </View>
            )
        }
        if (hasPermission === true) {
            return (
                <View style={{ backgroundColor: 'green', height: 700, width: 1400, alignItems: 'center' }}>
                    <Text style={styles.title}>AQI-Check AQI of your area </Text>
                    {this.state.aqi === '' ? <Text style={styles.text}>Loading...</Text>
                        : <Text style={styles.text}>city: {this.state.city} AQI:{this.state.aqi}</Text>
                    }

                    {
                    this.state.aqi === '' ? <Text style={styles.text}></Text> :
                    this.state.aqi > 0 && this.state.aqi <= 50 ?
                    <Text style={styles.text}>Your AQI: Good</Text> :
                    this.state.aqi > 50 && this.state.aqi <= 100 ?
                    <Text style={styles.text}>Your AQI: Moderate</Text> :
                    this.state.aqi > 100 && this.state.aqi <= 150 ?
                    <Text style={styles.text}> Your AQI: Unhealthy for sensitive groups</Text> :
                    this.state.aqi > 150 && this.state.aqi <= 200 ?
                    <Text style={styles.text}>Your AQI: Unhealthy</Text> :
                    this.state.aqi > 200 && this.state.aqi <= 300 ?
                    <Text style={styles.text}>Your AQI: Very Unhealthy</Text> :
                    this.state.aqi > 300 ?
                    <Text style={styles.text}>Your AQI: Hazardous</Text> :
                    <Text style={styles.text}>App failed please restart the app</Text>
                    }
                    <Text style={styles.text}>0-50 - Good</Text>
                    <Text style={styles.text}>51-100 - Moderate</Text>
                    <Text style={styles.text}>101-150 - Unhealthy for sensitive groups(adults,children,lung disease,etc.)</Text>
                    <Text style={styles.text}>151-200 - Unhealthy</Text>
                    <Text style={styles.text}>201-300 - Very Unhealthy</Text>
                    <Text style={styles.text}>301-500 - Hazardous</Text>
                </View>

            )
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
    text: {
        marginTop: 10,
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 15
    }
})
