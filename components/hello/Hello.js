import React from 'react';
import {Text, View, TextInput,StyleSheet,Button} from 'react-native';

const Hello = ({navigation}) => {
  const [text,onChangeText] = React.useState("");
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Hello Human</Text>
      <TextInput style={styles.input} value={text} placeholder="enter name" onChangeText={onChangeText}/>
      <Button style={styles.button} disabled={text ===""} title="next" onPress={()=>navigation.navigate('Welcome',{name:text})}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  view:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label:{
    fontSize:18,
    fontWeight:"bold"
  },
  button:{
    padding: 10,
    backgroundColor:"aquamarine",
    fontSize: 18
  }
})

export default Hello;
