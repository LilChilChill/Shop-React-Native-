import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

const Drink = () => {
    const [cocktails, setCocktails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(Response => Response.json())
        .then(data => {
            setCocktails(data.drinks)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error', error)
            setLoading(false)
        })
    }, [])

    if(loading){
        return
        <View>
            <Text>Loading...</Text>
        </View>
    }
    // const renderItem = ({item}) =>(
    //     <TouchableOpacity>
    //         <View style={styles.item}>
    //             <Image source={{uri: item.strDrinkThumb}} style={styles.image}/>
    //             <Text style={styles.title}>{item.strDrink}</Text>
    //         </View>
    //     </TouchableOpacity>
    // )
  return (
    <View>
        <FlatList 
            data={cocktails}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity>
                        <View style={styles.container}>
                            <View style={styles.item}>
                            <Image source={{uri: item.strDrinkThumb}} style={styles.image}/>
                            <Text style={styles.title}>{item.strDrink}</Text>
                            <Text style={styles.title}>$ 14.34</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
  )
}

export default Drink

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        paddingHorizontal: 20,
      },
      item:{
        backgroundColor: '#fff',
        width: 200,
        height: 241,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      image: {
        width: 150,
        height: 150,
        marginTop: 10,
        borderRadius: 200,
        position: 'relative',
        bottom: 45,
      },
})