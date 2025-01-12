import moment from 'moment';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({trip}) {

    const formatData=(data)=>{
        return JSON.parse(data);
    }
  return (
    <View style={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }}>
       <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
       +formatData(trip.tripData).locationInfo?.photoref+'&key='+process.env.API_KEY}}
                   style={{
                       width: 100,
                       height: 100,
                       borderRadius: 15,
                   }}
               />
        <View>
            <Text style={{
                fontFamily: 'monserrat-medium',
                fontSize: 18,
            }}>
                {trip.tripPlan?.travelPlan?.location}
            </Text>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 14,
                color: Colors.GRAY,
            }}>
                {moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}
            </Text>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 14,
                color: Colors.GRAY,
            }}>
                {formatData(trip.tripData).traveler.title}
            </Text>
        </View>
    </View>
  )
}