import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'
import { FontAwesome } from "@expo/vector-icons"

const CategoryItem = ({name, imgUrl, index}) => {
  
  return (
    <View style={[styles.container, index === 0 ? {marginLeft: 25} : {marginLeft: 15}]}>
        <View>
        <FontAwesome name={imgUrl} size={45} color="red" />
        </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50, 
        marginVertical: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.1,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(241,186,87, 0.5)'
    },
    header: {
        fontWeight: 'bold'
    }
})