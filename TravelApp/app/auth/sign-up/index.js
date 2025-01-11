import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth } from '../../../config/FirebaseConfig';

export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])// Execute only once

  const OnCreateAccount = async () => { // Make the function async
    if (email === '' || password === '' || username === '') {
      Toast.show({
        type: 'error',
        text1: 'Missing fields',
        text2: 'Please fill out all fields',
        visibilityTime: 4000,
        position: 'bottom',
        autoHide: true
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      // Save user ID or any other necessary information to AsyncStorage
      await AsyncStorage.setItem('userId', user.uid);

      // Optionally navigate to another screen
      // router.replace('/some-screen'); // Adjust the route as necessary

      Toast.show({
        type: 'success',
        text1: 'Account Created',
        text2: 'Your account was successfully created!',
        visibilityTime: 4000,
        position: 'bottom',
        autoHide: true
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
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
          Create New Account
       </Text>

       <View style = {{
        marginTop: 50,
      }}>
        <Text style = {{
          fontFamily: 'monserrat',
        }}>
          Username
        </Text>
        <TextInput
        style = {styles.input}
         placeholder = 'Enter Username'
         placeholderTextColor={Colors.GRAY}
         onChangeText={(value) => setUsername(value)}
         />
      </View>

    <View style = {{
          marginTop: 20,
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

    <TouchableOpacity onPress={OnCreateAccount} style = {{
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
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => router.replace('auth/sign-in')}
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
          Sign in
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