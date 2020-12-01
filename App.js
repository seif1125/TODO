import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import Header from './components/header'
import TodoList from './components/TodoList'
import AddItem from './components/AddItem'
import { StyleSheet, View,FlatList ,Text,TouchableWithoutFeedback,Keyboard} from 'react-native';

export default function App() {
const [list, setList] = useState(
  [
    {text:"wake up",key:1},
  ]
)

const deleteHandler=(key)=>{
  setList( ()=>{
    return list.filter(item=>item.key!=key) 
  }
  )
}

const addItem=(text)=>{
  setList( ()=>{
    return[{text:text,key:list.length+1},...list]
  }
  )
}

const checkList=()=>{
  if(list.length!=0){
    return(
     <View style={styles.list}>
        <FlatList
         data={list}
         renderItem={({item})=>(
          <TodoList item={item} deleteItem={deleteHandler} />
          )
          } 
       />
      </View>
    )
  }

  else{
    return(
      <Text>empty Todo</Text>
    )
  }
}




  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}> 
      <View style={styles.container}>
        <Header title="My Todo"/>
        <AddItem itemadd={addItem}/> 
        {checkList()}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  list:{
    height :500,
    borderWidth:1,
    marginTop:15
  }

});
