import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#F0F4FF'} barStyle={"dark-content"} />
        <Routes/>
    </NavigationContainer>
  )
}

