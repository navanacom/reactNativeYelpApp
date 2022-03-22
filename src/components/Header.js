import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab Your</Text>
      <Text style={styles.boldHeader}>delicious Meal!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 25
    },
    lightHeader: {
        fontSize: 35,
        
    }, 
    boldHeader: {
        fontSize: 40,
        fontWeight: 'bold', 
        
    }
})