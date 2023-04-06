/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import {Text, View, Button} from 'react-native';

export const ContadorScreen = () => {

const [contador, setContador] = useState(1);

  return (
     <View style ={{
        flex:1,
        justifyContent: 'center',
     }}>
        <Text style = {{
            textAlign: 'center',
            fontSize: 30,
        }}
        >Contador:{contador}</Text>
        <Button
        title='Aumentar'
        onPress={()=> setContador(contador + 1)}
        />
     </View>
  );
};

