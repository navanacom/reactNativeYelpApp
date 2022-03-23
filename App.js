import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { useState } from 'react';

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
      <Search />
      
      <FlatList keyExtractor={(category) => category.name} showsHorizontalScrollIndicator={false} horizontal data={commonCats} renderItem={({item, index}) =>( <CategoryItem handlePress={() => setTerm(item.name)} active={item.name === term} index={index} name={item.name} imgUrl={item.imgUrl} /> )} />
   
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
