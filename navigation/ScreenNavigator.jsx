import React from "react";
import {View,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

export default function ScreenNavigator(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name="Home"/>
            {/* <Stack.Screen name='login' component={Login} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    )
}