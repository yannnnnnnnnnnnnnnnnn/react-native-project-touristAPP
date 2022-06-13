/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import PropTypes from "prop-types";
 import {StyleSheet,Button, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
 import {Image as ReactImage} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Homepage from './Homepage'
import MainMenu from "./MainMenu"
import Place from './Place'
import Data from "./Data";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Homepage 
        start={() => navigation.navigate('List')}
      />
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MainMenu
        details={() => navigation.navigate('Place')}
      />
    </View>
  );
}

function PlaceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Place/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Place" component={PlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
