import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import List from './components/List'
import axios from 'axios';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

function App (){
  
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste de Pays</Text>
      <View>
        <List/>
      </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20588c',
    color:'white'
  },
  title: {
    textAlign:'center',
    backgroundColor:"white",
    color:'#20588c',
    padding: 50,
    marginVertical: 15,
    marginHorizontal: 16,
    fontSize: 50,
    fontWeight:'700',
    borderRadius: 7,
    overflow:'hidden'
  },
});

export default App;
