import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'

const RestaurantItem = ({restaurant, navigation}) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate('Rest', {id: restaurant.id})}>
<View style={[styles.container]}>
      <Image style={styles.image} source={{uri: restaurant.image_url}} />
      <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
              <Text style={styles.rating}>{restaurant.rating}</Text>
              <Text style={styles.money}>{restaurant.price}</Text>
          </View>
      </View>
    </View>
      </TouchableOpacity>
    
  )
}

export default withNavigation(RestaurantItem)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.1,
        elevation: 3,
    },
    image: {
        width: 75,
        height:75,
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    }, 
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    info: {
        flexDirection: 'row'
    }, 
    rating: {
        marginRight: 20
    },
    money: {
        color: 'gold'
    }
})