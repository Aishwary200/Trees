import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import Area from './screens/Area'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Area: Area,
})

const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
