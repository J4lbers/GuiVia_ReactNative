import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Mapa from './src/Mapa';
export default function App() {
  return (
    <View className='flex-1'>
      <View className="bg-slate-500 justify-center items-center">
        <Text>Mapa de la aplicacion</Text>
      </View>
      <Mapa />
    </View>
  );
}
