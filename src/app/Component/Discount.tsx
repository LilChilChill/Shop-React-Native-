import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Discount = () => {
  return (
    <View style={styles.discount}>
        <View style={styles.discount25}>
          <Text style={{color: '#000', fontSize: 48, fontFamily: 'Inter', fontWeight: '800',}}>
            25%
            <Text style={{color: '#fff', fontSize: 16, fontFamily: 'Inter', fontWeight: '800',}}>{'\t'} {'\t'} {'\t'}off</Text>
          </Text>

          <Text style={{color: '#fff', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',}}>
            on all <Text style={{fontWeight: 'bold',}}>sushi</Text> orders {'\n'}
            across app*
          </Text>

          <Text style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', marginTop: 5}}>
            Valid till 25th Dec, 2023
          </Text>

          <Text style={{color: 'white', fontSize: 5, fontFamily: 'Inter', fontWeight: '400', position: 'relative', top: 10, left: 60}}>
            *Terms and conditions applied
          </Text>
        </View>

        <View style={styles.discount50}>
          <Text style={{color: '#000', fontSize: 48, fontFamily: 'Inter', fontWeight: '800',}}>
            50%
            <Text style={{color: '#fff', fontSize: 16, fontFamily: 'Inter', fontWeight: '800',}}>{'\t'} {'\t'} {'\t'}off</Text>
          </Text>

          <Text style={{color: '#fff', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',}}>
            on all <Text style={{fontWeight: 'bold',}}>Mac n Cheese</Text>{'\n'}
            orders across app*
          </Text>

          <Text style={{color: 'black', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', marginTop: 5}}>
            Valid till 25th Dec, 2023
          </Text>

          <Text style={{color: 'white', fontSize: 5, fontFamily: 'Inter', fontWeight: '400', position: 'relative', top: 10, left: 60}}>
            *Terms and conditions applied
          </Text>
        </View>
      </View>
  )
}

export default Discount

const styles = StyleSheet.create({
discount:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  discount25:{
    backgroundColor: '#FF4B3A',
    paddingHorizontal: 20,
    width: 170, 
    height: 140,
    borderRadius: 20,
  },
  discount50:{
    backgroundColor: '#FF4B3A',
    paddingHorizontal: 20,
    width: 170, 
    height: 140,
    borderRadius: 20,
  },
})