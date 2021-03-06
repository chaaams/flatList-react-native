import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";

function List (){
    const [isLoading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const URL = 'https://restcountries.com/v3.1/all';
    useEffect (()=>{
        fetch(URL).then((response)=> response.json()).then((response)=>{
        console.log(response);
        setCountries(response)
    })
  },[])

    return(
        
        <View>
            <FlatList data={countries}
            
            renderItem={({item}) =>(
                <View style={styles.item}> 
                    
                    <Text style={styles.item}><Image style={styles.img}source={item.flags.svg}/> {item.name.common}, {item.capital}</Text>
                </View>
            )} 
            />
        </View>
            
        )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign:'center',
        borderRadius: 7,
        overflow:'hidden'
      },
      img:{
        padding: 10,
        width: 20,
        height:20,
        // marginVertical: 8,
        // marginHorizontal: 16,
      }
})
export default List