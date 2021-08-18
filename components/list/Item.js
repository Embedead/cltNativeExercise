import React from "react"
import {View, FlatList,StyleSheet,Text,Image} from "react-native"
import * as Animatable from "react-native-animatable";
import {SvgUri} from "react-native-svg"

export const Item = ({item})=>{
  return(
    <Animatable.View animation="bounceIn" style={styles.item}>
      <View style={styles.svgview}>
        <SvgUri uri={item.flag} width="200" height="100" preserveAspectRatio="xMinYMax meet" viewBox="0 0 100 100"/>
      </View>
      <Text style={styles.title}>{item.name}</Text>
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