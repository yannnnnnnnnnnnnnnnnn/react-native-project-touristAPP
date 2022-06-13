import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet,View, Text,TouchableOpacity, FlatList, ScrollView,SafeAreaView} from 'react-native';
import {Image as ReactImage} from 'react-native';
import MyButton from './MyButton';
import Data from './Data';

// const Data = [
//   {
//     id: '1',
//     title: 'CALVARY HILLS',
//     src1: require('./TOURIST_APP/CALVARY_HILLS/calvary1.jpg'),
//     src2: require('./TOURIST_APP/CALVARY_HILLS/calvary2.jpg'),
//   },
//   {
//     id: '2',
//     title: 'NASSIPPING',
//     src1: require('./TOURIST_APP/NASSIPING/nassipping1.jpg'),
//     src2: require('./TOURIST_APP/NASSIPING/nassiping2.jpg'),
//   },
//   {
//     id: '3',
//     title: 'PALAUI ISLAND',
//     src1: require('./TOURIST_APP/PALAUI/palaui1.jpg'),
//     src2: require('./TOURIST_APP/PALAUI/palaui2.jpg'),
//   },
// ]

const MainMenu = (props) => {
  const renderItem = ({ item }) => (
    <MyButton title={props.id} src={item.src1} handleClick={props.details} />
  );
    return (
      <View style={styles.container}>
        <View style={styles.subContainer }>
          <FlatList
            keyExtractor={item => item.id}
            data={Data}
            renderItem={renderItem}
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    subContainer: {
      width: '90%',
      height: 750,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingTop: 20,
      backgroundColor: '#6FE3FB',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 'auto',
    }
  });

export default MainMenu;


