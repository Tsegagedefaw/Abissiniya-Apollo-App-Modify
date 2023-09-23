import React from "react";
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login(){
    return(
        <SafeAreaView style={Styles.container}>
            <Background>
                <Text style={Styles.HeaderText}>
                    Welcome Back!
                </Text>
                <View style={Styles.Innercontainer} >
                    <Text>
                        hjf
                    </Text>
                </View>
            </Background>
        </SafeAreaView>
    )
}

const Background = ({children})=>{
    return(
        <View >
            <ImageBackground 
                source={require('../assets/Image/background.jpg')}
                style={{width: '100%' , height :'100%'}}
            />
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        //  flex:1,
    },
    HeaderText:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:'center',
        margin:75,
        color:'white'
    },
    Innercontainer:{
        backgroundColor:'white',
        height:650,
        width:'110%',
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
    }
})