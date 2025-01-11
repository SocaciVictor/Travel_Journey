import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
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

  const OnCreateAccount = () => {

    if (email === '' || password === '' || username === '') {

      console.log('Please fill out all fields')
      Toast.show({
        text1: 'Error',
        text2: 'Please fill out all fields',
        type: 'error',
        position: 'bottom',
        visibilityTime: 4000,
      })
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
  }

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