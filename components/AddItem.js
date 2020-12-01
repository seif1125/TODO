import React,{useState} from 'react'
import { StyleSheet, TextInput, View,Text,Alert} from 'react-native';

export default function AddItem({itemadd}) {
const[item,setItem]=useState("");

const changeText=(val)=>{
    setItem(val);
}
const checkValidEntry=()=>{

    if(item.length<=0){
        Alert.alert("oops","please enter non empty values",[
        {text:"Got It",onPress:()=>{console.log("closed")}}
        ])
    }
    else{
        itemadd(item)
        setItem('')
    }
}


    return (
    <View
    alignItems='center' 
    >
       <TextInput
       placeholder="add your todo here..."
       style={styles.input} 
       value={item}
       onChangeText={changeText}
       />
       <View
       style={styles.buttoncontainer}
       >

        <Text
         style={styles.buttontext}
         onPress={()=>
         {
            checkValidEntry()
         }} 
        >
         Add new TODO   
        </Text>
        </View>
      </View>
    );

}
const styles = StyleSheet.create({
  input: {
    margin: 3,
    width:350,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderWidth: 2,
    fontSize:20,
    borderColor: 'coral',
  },
  buttoncontainer:{
      backgroundColor:'coral',
      borderRadius:7.5,
     padding:10,
      width:200,
      
  },
  buttontext:{
      color:'white',
      textAlign:'center',
  }
});
