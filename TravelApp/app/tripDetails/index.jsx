import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
import { Colors } from '../../constants/Colors';

export default function TripDetails() {

    const navigation=useNavigation();
    const {trip}=useLocalSearchParams();
    const [tripDetails,setTripDetails]=useState([]);
    const formatData=(data)=>{
        return JSON.parse(data);
    }
    let imageUrl = tripDetails?.tripData ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${formatData(tripDetails.tripData).locationInfo?.photoref}&key=${process.env.API_KEY}` : undefined;
    let startDate = tripDetails?.tripData ? moment(formatData(tripDetails.tripData).startDate).format('DD MMM YYYY') : undefined;
    let endDate = tripDetails?.tripData ? moment(formatData(tripDetails.tripData).endDate).format('DD MMM YYYY') : undefined;
    let tripIcon = tripDetails?.tripData ? formatData(tripDetails.tripData).traveler.title : undefined;
    let tripBuget = tripDetails?.tripData ? formatData(tripDetails.tripData).budget : undefined;

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Trip Details',
        });
        
        if (trip) {
            try {
                const parsedTrip = JSON.parse(trip);
                setTripDetails(parsedTrip);
                console.log('Parsed trip details:', parsedTrip);
            } catch (error) {
                console.error('Failed to parse trip details:', error);
                
            }
        }
    }, [trip, navigation]);

    
  return tripDetails&&(
    <ScrollView>
        {imageUrl && (
            <Image
                source={{ uri: imageUrl }}
                style={{
                    width: "100%",
                    height: 330,
                    
                }}
            />
        )}
        <View style={{
            padding:15,
            backgroundColor:Colors.WHITE,
            height:"100%",
            marginTop:-30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
        }}>
           <Text style={{
                fontFamily: 'monserrat-extra-bold',
                fontSize: 25,
                marginTop: 10,
           }}>
                {tripDetails?.tripPlan?.travelPlan?.location}
           </Text>
           <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
           }}>
                <Text style={{
                                fontFamily: 'monserrat',
                                fontSize: 18,
                                color: Colors.GRAY,
                            }}>
                                {startDate}
                            </Text>
                 <Text style={{
                                fontFamily: 'monserrat',
                                fontSize: 18,
                                color: Colors.GRAY,
                            }}>
                            -  {endDate}
                            </Text>
        </View>
         <Text style={{
                    fontFamily: 'monserrat',
                    fontSize: 17,
                    color: Colors.GRAY,
           
                }}>
                    ✈️ {tripIcon} | 🏦 {tripBuget}
                </Text>

                <FlightInfo flightData={tripDetails?.tripPlan?.travelPlan?.flightDetails} />
                <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotelOptions} />
                <Text style={{
                    fontFamily: 'monserrat-extra-bold',
                    fontSize: 20,
                    marginTop: 20,
                }}>
                    🗺️ Plan Details
                </Text>
                <PlannedTrip itinerary={tripDetails?.tripPlan?.travelPlan?.dailyItinerary} />
        </View>

                

    </ScrollView>
  )
}