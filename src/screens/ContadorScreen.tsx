/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {

const [contador, setContador] = useState(1);

  return (
     <View style ={
     styles.container}>
        <Text style = {styles.title}
        >Contador:{contador}</Text>
        <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        >
            <View style={styles.buttonIncrement}>
            <Text>Incrementar</Text>
            </View>
        </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
},
title: {
    textAlign: 'center',
    fontSize: 30,
},
buttonIncrement: {
    backgroundColor: 'blue',
    borderRadius: 100,
},
});