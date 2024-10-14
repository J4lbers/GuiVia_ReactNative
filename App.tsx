import React from 'react';
import {  View } from 'react-native';
import Mapa from './src/Mapa';
import Navegacion from './src/Barra de navegacion/Navegacion';
const App = () => {
  return (
    <View className="bg-slate-400 flex-1">
      <View
           className='bg-white flex-1'>
        <Mapa />
      </View>
      <Navegacion />
    </View>
  );
}

export default App;