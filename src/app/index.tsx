import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        Food{'\n'}For Everyone
      </Text>
      
      <Image style={{position: 'absolute', top: 90}}  source={require('../../assets/images/burger 1.png')} />
      <Image style={{position: 'absolute', right: 0}} source={require('../../assets/images/cofee 1.png')} />
      <Image style={{position: 'absolute', right: 0, top: 110}} source={require('../../assets/images/ice cream 1.png')} />
      <Image style={{position: 'absolute', left: 0, bottom: 70, zIndex: 2 }} source={require('../../assets/images/Salad.png')} />
      <Image style={{position: 'absolute', right: 0, bottom: 70, zIndex: 2 }} source={require('../../assets/images/INSTANT NOODLE 1.png')} />
      <Image style={{position: 'absolute', left: 0, bottom: 0, zIndex: 2,width: 170, height: 170 }} source={require('../../assets/images/taco 1.png')} />

      <TouchableOpacity style={styles.textBackground} onPress={() => router.push('Signin')}>
        <Text style={styles.textContainerBottom}>
          Yum Bites
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
    alignItems: 'flex-start',
    zIndex: 1,

  },
  overlay:{
    
  },
  textContainer:{
    color: 'white',
    fontSize: 62,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 53.84,
    padding: 10,
    marginTop: 50,
    zIndex: 2
  },
  textBackground:{
    position: 'absolute',
    bottom: 210,
    right: 75,
    backgroundColor: '#fff',
    width: 270,
    height: 70,
    borderRadius: 100,
    zIndex: 1
  },  
  textContainerBottom:{
    top: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 50,
    fontFamily: 'Neat',
    fontWeight: '400',
    zIndex: 2
  }
})