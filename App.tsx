/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export const App = () => {
  return (
    <View style={{
      flex:1,
      // backgroundColor: 'blue',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize:40,
        textAlign: 'center',
      }}> Hola Mundo </Text>
    </View>
  );
};

export default App;
