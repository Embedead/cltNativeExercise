import React from "react"
import {View, FlatList,StyleSheet,Text,Image,Pressable} from "react-native"
import * as Animatable from "react-native-animatable";
import {SvgUri} from "react-native-svg"
import {DetailsModal} from "./DetailsModal"

export const Item = ({item})=>{
  const [open,setOpen] = React.useState(false);
  return(
    
    <Animatable.View animation="bounceIn" style={styles.item}>
      <Pressable onPress={()=>{setOpen(true) 
      }}>

      <View style={styles.svgview}>
        <SvgUri uri={item.flag} width="200" height="100" preserveAspectRatio="xMinYMax meet" viewBox="0 0 100 100"/>
      </View>
      <Text style={styles.title}>{item.name}</Text>
      </Pressable>
      <DetailsModal open={open}>
        {item.currencies.map((currency,index)=>{
          return(
            <View key={index}>

            <Text>{currency.code}</Text>
            <Text>{currency.name}</Text>
            <Text>{currency.symbol}</Text>
            </View>
          )
        })}
        <Text>{item.capital}</Text>
        <Text>{item.region}</Text>
      </DetailsModal>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection:"column",
    flexWrap:"nowrap",
    backgroundColor:"aquamarine",
    height:"auto",
    padding: 15,
    marginVertical:8,
    marginHorizontal:16,
  },
  svgview:{
    width: "100%",
    height:100,
  },
  title:{
    fontSize: 26
  },
})