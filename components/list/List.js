import React from "react"
import {View, FlatList,StyleSheet,Text} from "react-native"
import {Item} from "./Item"





export const ListComp = ({data}) => {
  const renderItem = ({item})=> <Item item={item}/>;
  return(
    <View style={styles.container}>
      
      <FlatList data={data} renderItem={renderItem} keyExtractor={item=>item.name}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  
  
})