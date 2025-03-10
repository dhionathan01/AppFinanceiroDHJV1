import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#F0F4FF'} barStyle={"dark-content"} />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}

