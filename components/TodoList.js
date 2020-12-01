
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoList({item,deleteItem}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
      <MaterialIcons 
      style={styles.button}  
      name='delete' 
      size={25} 
      color='red' 
      onPress={()=>deleteItem(item.key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        margin:7.5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30,
        width:370,
        flexDirection:'row'
    },
    text:{
        fontSize:25,
    },
    button:{
        marginLeft:30,
    }

 
});
