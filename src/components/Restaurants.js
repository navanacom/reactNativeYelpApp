import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'

const Restaurants = () => {

    const [{data, loading, error}, searchRestaurants] = useRestaurants()
    
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        height: 10
    }
})