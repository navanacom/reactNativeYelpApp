import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const Categorise = ({commonCats, setTerm, term}) => {
  return (
    <FlatList keyExtractor={(category) => category.name} showsHorizontalScrollIndicator={false} horizontal data={commonCats} renderItem={({item, index}) =>( <CategoryItem handlePress={() => setTerm(item.name)} active={item.name === term} index={index} name={item.name} imgUrl={item.imgUrl} /> )} />
  )
}

export default Categorise

const styles = StyleSheet.create({})