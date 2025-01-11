import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function StartNewTripCard() {

    const router = useRouter();

  return (
    <View style = {{
        padding: 20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 25,
    }}>
      
      <Entypo name="location-pin" size={30} color="black" />
      <Text style={{
        fontSize: 20,
        fontFamily: 'monserrat-medium',
      }}>
        No trips planned yet?
      </Text>
      <Text style={{
        fontSize: 20,
        fontFamily: 'monserrat',
        textAlign: 'center',
        color: Colors.GRAY,
      }}>
        It's time to plan a new travel experience!
      </Text>

      <TouchableOpacity onPress={() => router.push('/create-trip/search-place')} style ={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            paddingHorizontal: 30,
      }}>
        <Text style={{
            color: Colors.WHITE,
            fontFamily: 'monserrat-medium',
            fontSize: 15,
        }}>
            Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  )
}