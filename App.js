import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { useState } from 'react';
import Categorise from './src/components/Categorise';
import Restaurants from './src/components/Restaurants';

export default function App() {
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

      <Restaurants />
   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
