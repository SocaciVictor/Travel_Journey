import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth } from '../../../config/FirebaseConfig';
import { Colors } from '../../../constants/Colors';



export default function SignIn() {
  
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[]) // Execute only once

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    if (!email && !password) {
      Toast.show({
        type: 'error',
        text1: 'Missing fields',
        text2: 'Please Enter Email & Password',
        visibilityTime: 4000,
        position: 'bottom',
        autoHide: true
      });
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
  
      // Salvarea ID-ului utilizatorului în AsyncStorage
      await AsyncStorage.setItem('userId', user.uid);
  
      // Navigația către ecranul principal după autentificare
      router.replace('/mytrip');
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Toast.show({
        type: 'error',
        text1: errorCode,
        text2: errorMessage,
        visibilityTime: 4000,
        position: 'bottom',
        autoHide: true
      });
    }
  };
  

  return (
    <View style = {{
      padding: 25,
      paddingTop: 50,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style = {{
        fontFamily: 'monserrat-bold',
        fontSize: 30,
        marginTop: 30,
      }}>
          Sign In
      </Text>
      <Text style = {{
        fontFamily: 'monserrat',
        fontSize: 30,
        color: Colors.GRAY,
        marginTop: 20,
      }}>
          Welcome back
      </Text>
      <Text style = {{
        fontFamily: 'monserrat-bold',
        fontSize: 30,
        marginTop: 10,
        color: Colors.GRAY,
      }}>
          You've been missed
      </Text>
      
      <View style = {{
        marginTop: 50,
      }}>
        <Text style = {{
          fontFamily: 'monserrat',
        }}>
          Email
        </Text>
        <TextInput
        style = {styles.input}
         placeholder = 'Enter Email'
         placeholderTextColor={Colors.GRAY}
         onChangeText={(value) => setEmail(value)}
         />
      </View>

      <View style = {{
        marginTop: 20,
      }}>
        <Text style = {{
          fontFamily: 'monserrat',
        }}>
          Password
        </Text>
        <TextInput
        color = {Colors.PRIMARY}
        secureTextEntry = {true}
        style = {styles.input}
        placeholder = 'Enter Password'
        placeholderTextColor={Colors.GRAY}
        onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity onPress={onSignIn} style = {{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50,
      }}>
        <Text style = {{
          fontFamily: 'monserrat-extra-bold',
          color: Colors.WHITE,
          textAlign: 'center',
        }}>
          Sign in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => router.replace('auth/sign-up')}
      style = {{
        padding: 20,
        backgroundColor: Colors.White,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
      }}>
        <Text style = {{
          fontFamily: 'monserrat-extra-bold',
          color: Colors.PRIMARY,
          textAlign: 'center',
        }}>
          Create Account
        </Text>
      </TouchableOpacity>
      <Toast />

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding: 10,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    fontFamily: 'monserrat',
  }
})