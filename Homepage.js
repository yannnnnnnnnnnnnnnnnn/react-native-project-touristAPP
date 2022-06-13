import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet,Button, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import MyButton from './MyButton';


const Homepage = (props) => {
    return (
    <View style={styles.container}>
        <ReactImage data-layer="3ba75c3a-d8e4-4738-be8c-1c229c9bd962" source={require('./assets/image2.png')} style={styles.img} />
        <ReactImage data-layer="3ba75c3a-d8e4-4738-be8c-1c229c9bd962" source={require('./assets/image1.png')} style={styles.img} />
        <ReactImage data-layer="3ba75c3a-d8e4-4738-be8c-1c229c9bd962" source={require('./assets/image3.png')} style={styles.img} />
        <TouchableOpacity
            onPress={props.start}
            style={{backgroundColor: '#0BF2EA' ,borderRadius: 10,paddingVertical: 10,paddingHorizontal: 12, width:'100%', height: 70, marginBottom: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 30,color: '#000',fontWeight:'bold',alignSelf:'center',textTransform:'uppercase'}}>START</Text>
        </TouchableOpacity>
        
    </View>
      )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 50
      },
      img: {
        width: "100%",
        height: 170,
        margin: 20
      },
  });

export default Homepage;


