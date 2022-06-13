import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text,TouchableOpacity, Image} from 'react-native';


const MyButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.handleClick}
            style={{backgroundColor: '#F6F66A' ,borderRadius: 10,paddingVertical: 10,paddingHorizontal: 12, width:'100%', marginBottom: 10}}>
            <Image
                source={props.src}
                style={styles.img}
            />
            <Text style={{fontSize: 18,color: '#000',fontWeight:'bold',alignSelf:'center',textTransform:'uppercase'}}>{props.title}</Text>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
  });

export default MyButton;


