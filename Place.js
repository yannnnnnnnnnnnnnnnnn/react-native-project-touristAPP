import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet,View, Text,TouchableOpacity, FlatList, ScrollView,SafeAreaView,Image} from 'react-native';
import MyButton from './MyButton';

const Place = (props) => {
    return (
      <ScrollView>
      <View style={{flex:1 ,alignItems:'center',justifyContent:'center', paddingHorizontal: 30, paddingVertical: 50,}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 30}}>{props.title}</Text>
        <Image
          source={props.src1}
          style={styles.img}
        />
        <Image
          source={props.src2}
          style={styles.img}
        />
        <Text style={{fontSize: 18, textAlign: 'center', marginVertical: 20}}>{props.description}</Text>
        <TouchableOpacity
            onPress={props.handleClick}
            style={{backgroundColor: '#F6F66A' ,borderRadius: 10,paddingVertical: 10,paddingHorizontal: 12, width:'80%', marginBottom: 10}}>
            <Text style={{fontSize: 18,color: '#000',fontWeight:'bold',alignSelf:'center',textTransform:'uppercase'}}>BACK TO MAIN MENU</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    img: {
      width: '100%',
      height: 250,
      resizeMode: 'stretch',
      marginVertical: 10,
      borderRadius: 50
  },
  });

export default Place;


