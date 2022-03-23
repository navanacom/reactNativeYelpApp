import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RestScreen = ({navigation}) => {
   const id = navigation.getParam("id")
  return (
    <View>
      <Text>RestScreen {id}</Text>
    </View>
  )
}

export default RestScreen

const styles = StyleSheet.create({})