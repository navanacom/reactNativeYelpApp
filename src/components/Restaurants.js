import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import { useEffect } from 'react'

const Restaurants = ({term}) => {

    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    console.log(data)
    
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