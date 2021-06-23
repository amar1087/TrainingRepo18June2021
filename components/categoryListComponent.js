import React from 'react';
import {  Alert, FlatList, TouchableHighlight, Text , View , StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

//const myIcon = <Icon name="rocket" size={30} color="#900" />;

export const CatagoryList = (props) => {
    return (
      <View style={styles.container}>
       <FlatList
            keyExtractor={(item) => item.id}
            data={myphotos}
            renderItem={({ item,separators }) => {
                console.log(item)
                return <TouchableHighlight
                    key={item.key}
                    onPress={() => onPressItem(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={styles.item}>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}

        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    TextHeader : {
        color: '#660066',
        textAlign: "center",
        fontSize: 30,
        fontWeight:'bold'
    },
    TextInput : {
       height: 60,
       borderWidth:2,
       fontSize: 20,
       borderColor:'#ebebe0',
       width:'80%',
       marginBottom:10
  }

  });
  