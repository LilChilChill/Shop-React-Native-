import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState }  from 'react'
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Signin = () => {
  const [isChecked, setChecked] = useState(false);

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
          Password
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly'}}>
          <TouchableOpacity>
            <Ionicons name='eye-off' size={20} color={'#fff'} style={{paddingHorizontal: 10}} />
          </TouchableOpacity>
          <Text style={styles.passwordText}>
            Hide
          </Text>
        </View>
        </View>
        <TextInput style={styles.passwordInput}/>
      </View>

      <View style={styles.remember}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#000' : undefined}
        />
        <Text style={styles.rememberText}>
          Remember me
        </Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonSignin} onPress={() => router.push('Home')}>
          <Text style={{color: 'white', fontSize: 22, fontFamily: 'Poppins', fontWeight: '500',}}>
            Sign in 
          </Text>
        </TouchableOpacity>

        <View style={styles.or}>
          <View style={styles.line} />
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '900', paddingHorizontal: 20}}>
            OR
          </Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.buttonSignup}>
          <Text style={{color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400',}}>
            Create an account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <Image source={require('../../../assets/images/google-logo.png')} style={{width: 24, height: 24}} />
          <Text style={{color: '#333333', fontSize: 20, fontFamily: 'Poppins', fontWeight: '900', paddingLeft: 15}}>
            Continue with Google
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    color: '#fff'
  },
  password:{
    paddingHorizontal: 20,
    paddingTop: 20,
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
    paddingHorizontal: 20,
    color: '#fff'
  },
  remember:{
    paddingVertical: 20,
    left: -80,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  checkbox:{
    marginRight: 10,
    borderColor: '#fff',
    borderWidth: 1,
    width: 16, 
    height: 16,
  },
  rememberText:{
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  buttonSignin:{
    backgroundColor: '#000',
    width: 350,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    marginTop: 40,
  },
  button:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -20,
  },
  or:{
    paddingHorizontal: 60,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 2, 
  },
  buttonSignup:{
    backgroundColor: '#000',
    width: 350,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  buttonGoogle:{
    backgroundColor: '#fff',
    width: 350,
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    marginTop: 20,
  }
})