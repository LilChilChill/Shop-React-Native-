import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Image style={{width: 22, height: 14,}} source={require('../../../assets/images/Vector.png')}/>
        </TouchableOpacity>

        <View style={styles.search}>
          <Ionicons name='search-outline' size={24} />
          <TextInput placeholder='Search' placeholderTextColor={'#5f5f5f'} style={{fontSize: 17, fontFamily: 'Poppins', fontWeight: '900', paddingLeft: 10}} />
        </View>

        <TouchableOpacity>
          <Image style={{width: 51, height: 53, borderRadius: 50}} source={require('../../../assets/images/NFT Owner 1.png')}/>
        </TouchableOpacity>
      </View>

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

      <View style={{marginTop: 20, display: 'flex', alignItems: 'center'}}>
        <View style={styles.banner}>
          <Text style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',}}>
              Use code {'\n'}

              <Text style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: 'bold',}}>
                iLovemyfood
              </Text> {'\n'}

              <Text style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',}}>
                to get <Text style={{color: '#FA4A0C',}}>10%</Text> off on your orders
              </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EAEAEA',
    
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  search:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    width: 257,
    height: 36, 
    borderRadius: 30,
    paddingHorizontal: 20,
  },
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
  banner:{
    backgroundColor: '#333333',
    width: 360,
    height: 140,
    borderRadius: 20,
    // marginTop: 15,
    // marginLeft: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})