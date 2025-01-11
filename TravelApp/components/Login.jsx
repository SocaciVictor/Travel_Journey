import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {

    const router = useRouter();
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
                fontSize: 17,
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 25,
            }}>
                Discover your next adventure! Personalized itineraries at your fingertips.
            </Text>
            
            <TouchableOpacity style = {styles.button}
                onPress={() => router.push('auth/sign-in')}
            >
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontFamily: 'monserrat-extra-bold',
                    fontSize: 17,
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>

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
        padding: 40,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        marginTop: "25%",
    }
});

