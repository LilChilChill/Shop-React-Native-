import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Signin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={{color: '#333333', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500',}}>
          Sign in
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#111111', fontSize: 13, fontFamily: 'Poppins', fontWeight: '400', textDecorationLine: 'underline',}}>
            Reset password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.account}>
        <Text style={styles.accountText}>
          Email
        </Text>
        <TextInput style={styles.accountInput}/>
      </View>

      <View style={styles.password}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text style={styles.passwordText}>
          Email
        </Text>
        <View>
          <Text style={styles.passwordText}>
            <Ionicons name='eye-off' size={20} />
            Hide
          </Text>
        </View>
        </View>
        <TextInput style={styles.passwordInput}/>
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  account:{
    paddingHorizontal: 20,
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  accountText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    paddingBottom: 5
  },
  accountInput:{
    width: '100%',
    height: 56,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12, 
  },
  password:{
    paddingHorizontal: 20,
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  passwordText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    paddingBottom: 5,
  },
  passwordInput:{
    width: '100%',
    height: 56,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12, 
  }
})