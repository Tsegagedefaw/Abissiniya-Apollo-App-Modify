import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenNavigator from './navigation/ScreenNavigator';
import Login from './screens/login';
export default function App() {
 
  return (
    // <ScreenNavigator/>
    <Login/>
  );
}