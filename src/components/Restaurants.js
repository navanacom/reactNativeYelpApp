import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import { useEffect } from 'react'
import RestaurantItem from './RestaurantItem'


const Restaurants = ({term}) => {

    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    if(loading) return <ActivityIndicator size='large' marginVertical={30} />
    if(error) return (
        <View style={styles.container}>
            <Text style={styles.header}>{error}</Text>
        </View>
    )
    
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
      <FlatList data={data} keyExtractor={rest => rest.id}
      renderItem={({item}) => (
          <RestaurantItem restaurant={item} />
      )}
      />
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 25,
        marginVertical: 15,
        
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        
    }
})