import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native';

export default function Photo() {
let url=props.link
let personsname=props.name
  return (
    <View>
    <Image source={{url}}/>
    <Text>{personsname}</Text>
    </View>
  )
}

