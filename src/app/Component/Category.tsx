import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => setSelectedCategory(item)}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
        <Text style={[styles.category, selectedCategory === item && {
          color: "#FA4A0C", 
          borderBottomWidth: 2, 
          borderBottomColor: '#FA4A0C', 
          textAlign: 'center',
          }]}>
            {item}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    paddingHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  category:{
    color: '#9A9A9D',
    fontSize: 17,
    fontFamily: 'Poppins',
    fontWeight: '400',
  }
})