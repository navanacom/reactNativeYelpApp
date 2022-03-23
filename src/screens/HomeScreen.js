import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categorise from '../components/Categorise'
import Restaurants from '../components/Restaurants'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
    const [term, setTerm] = useState("Burger")

  const commonCats = [
    {
      name: "Burger",
      imgUrl: 'home'
    },
    {
      name: "Pizza",
      imgUrl: 'home'
    },
    {
      name: "Dessert",
      imgUrl: 'home'
    },
    {
      name: "Pasta",
      imgUrl: 'home'
    },
    {
      name: "Drinks",
      imgUrl: 'home'
    },
    {
      name: "Passta",
      imgUrl: 'home'
    },
    {
      name: "DryCake",
      imgUrl: 'home'
    }
  ]
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      
      <Categorise commonCats={commonCats} term={term} setTerm={setTerm} />

      <Restaurants term={term} />
   
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'rgb(253,253,253)',
        flex: 1
    }
})