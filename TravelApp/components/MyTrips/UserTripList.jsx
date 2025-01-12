import moment from 'moment';
import React, { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';

export default function UserTripList({userTrips}) {

    const LatestTrip=JSON.parse(userTrips[0].tripData);
    
    useEffect(() => {
       console.log(LatestTrip?.locationInfo?.photoref)
    })

  return (
    <ScrollView>
      <View style={{
        marginTop: 35,
      }}>
        {LatestTrip?.locationInfo?.photoref?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo?.photoref+'&key='+process.env.API_KEY}}
            style={{
                width: '100%',
                height: 240,
                objectFit: 'cover',
                borderRadius: 15,
            }}
        />
        :
        <Image  source={require('../../assets/images/placeholder.jpg')}
            style={{
                width: '100%',
                height: 240,
                objectFit: 'cover',
                borderRadius: 15,
            }}
        />}
      </View>

      <View style={{
        marginTop: 15,
      }}>
        <Text style={{
            fontFamily: 'monserrat-medium',
            fontSize: 20,
        }}>
            {userTrips[0].tripPlan?.travelPlan?.location}
        </Text>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        }}>
        <Text style={{
            fontFamily: 'monserrat',
            fontSize: 17,
            color: Colors.GRAY,
        }}>
            {moment(LatestTrip.startDate).format('DD MMM YYYY')}
        </Text>
        <Text style={{
            fontFamily: 'monserrat',
            fontSize: 17,
            color: Colors.GRAY,
   
        }}>
            ✈️ {LatestTrip.traveler.title} | 🏦 {LatestTrip.budget}
        </Text>

        </View>
        <TouchableOpacity style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 15,
            marginTop: 30,
            
        }}>
            <Text style={{
                color: Colors.WHITE,
                fontFamily: 'monserrat-bold',
                textAlign: 'center',
            }}>
                See your plan
            </Text>
        </TouchableOpacity>
      </View>

      {userTrips.map((trip, index) => (
         <UserTripCard key={index} trip={trip}>

         </UserTripCard>
      ))}
    </ScrollView>
  )
}