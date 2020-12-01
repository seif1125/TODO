
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"coral",
    width:650,
    padding:50,
    textAlign:'center',
  },
  text:{
      color:'white',
      textAlign:'center',
      fontSize:20,
      justifyContent:'center',
      paddingTop:24,
  }
});
