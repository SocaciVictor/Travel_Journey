import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { Colors } from '../../constants/Colors';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  
  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text style={{
          fontFamily: 'monserrat-bold',
          fontSize: 35,
        }}>
          My Trip
        </Text>
        <AntDesign name="pluscircleo" size={35} color="black" />
      </View>


      {userTrips?.length == 0 ?
        <StartNewTripCard /> :
        null
      }
    </View>
  )
}