import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export default function Login() {
  return (
    <View>
        <Image source={require('../assets/images/login.jpg')}
            style={{
                width: '100%', 
                height: 500
            }}
        />
        <View style = {styles.container}>
            <Text style={{
                fontSize: 29,
                fontFamily: 'monserrat-extra-bold',
                textAlign: 'center',
                marginTop: 10,
            }}>Welcome to Travel App</Text>

            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 16,
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 25,
            }}>
                Discover your next adventure! Personalized itineraries at your fingertips.
            </Text>
            
            <View style = {styles.button}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontFamily: 'monserrat',
                    fontSize: 17,
                }}>
                    Sign in with Google
                </Text>
            </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: "100%",
        padding: 25,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        marginTop: "20%",
    }
});

