import React from 'react';
import { Text , View , StyleSheet, TextInput , Button  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

//const myIcon = <Icon name="rocket" size={30} color="#900" />;

export const Login = (props) => {
    return (
      <View style={styles.container}>
        <Text style = {styles.TextHeader}>User</Text>
        <Icon name="users" size={70} color="#660066" />
        <TextInput
            style={styles.TextInput}
            placeholder="Enter Name"
            onChangeText={text => setText(text)}
        />
        <Button color='#660066' title='Login' onPress={() => props.navigation.navigate('LabCart')}/>
        <StatusBar style="auto" />
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
  