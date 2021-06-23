import React from 'react';
import { Text , View , StyleSheet, TextInput , Button  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LabCart = () => {
    return (
      <View style={styles.container}>
        <Text style = {styles.TextHeader}>Lab Cart</Text>
        <Icon name="list" size={70} color="#660066" style='auto' />
        <Icon name="gift" size={70} color="#660066" />
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column", 
      
    },
    TextHeader : {
        color: '#660066',
        textAlign: "center",
        fontSize: 30,
        fontWeight:'bold',
        marginBottom : 50
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
  