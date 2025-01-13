import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {
  return (
    <View style={{
        marginTop:20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{
            fontFamily: 'monserrat-extra-bold',
            fontSize: 20,
      }}>
        ✈️ Flights
        </Text>
      <TouchableOpacity style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 10,
        }}>
         <Text style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'monserrat',
             
            }}>
                Book Here
            </Text>
        </TouchableOpacity>
      </View>
     
        <Text style={{
            fontFamily: 'monserrat',
            fontSize: 17,
            marginTop: 10,
        }}>
            Airline: {flightData?.bookingUrlExample}
        </Text>
        <Text style={{
            fontFamily: 'monserrat',
            fontSize: 17,
           
        }}>
            Price: {flightData?.estimatedPrice}
        </Text>
        
           
       
    </View>
  )
}