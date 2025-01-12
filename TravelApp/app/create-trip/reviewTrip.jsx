import { useNavigation } from 'expo-router';
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function ReviewTrip() {

    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    

     useEffect(() => {
              navigation.setOptions({
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: 'Review Trip',
              });
          }, []);
    

  return (
    <View style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}>
      <Text style={{
        fontFamily: 'monserrat-extra-bold',
        fontSize: 35,
        marginTop: 20,
      }}>
        Review your trip
      </Text>
{/* 
      Destination */}
      <View style={{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text style={{
        fontSize: 40,
      }}>
        📌
      </Text>
        <View>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 20,
                color: Colors.GRAY,
            }}>
                Destination
            </Text>
            <Text style={{
                fontFamily: 'monserrat-medium',
                fontSize: 20,
            }}>
                {tripData?.locationInfo?.name}
            </Text>
        </View>

        
      </View>

      <View style={{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text style={{
        fontSize: 40,
      }}>
        🗓️
      </Text>
        <View>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 20,
                color: Colors.GRAY,
            }}>
                Travel Date
            </Text>
            <Text style={{
                fontFamily: 'monserrat-medium',
                fontSize: 20,
            }}>
                {moment(tripData?.startDate).format('DD MMM')+ ' - ' + moment(tripData?.endDate).format('DD MMM')}
                ({tripData?.totalNoOfDays} days)
            </Text>
        </View>

        
      </View>

      <View style={{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text style={{
        fontSize: 40,
      }}>
        ✈️
      </Text>
        <View>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 20,
                color: Colors.GRAY,
            }}>
                Who is traveling
            </Text>
            <Text style={{
                fontFamily: 'monserrat-medium',
                fontSize: 20,
            }}>
                {tripData?.traveler?.title}
            </Text>
        </View>
        
        
      </View>

      <View style={{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text style={{
        fontSize: 40,
      }}>
        🏦
      </Text>
        <View>
            <Text style={{
                fontFamily: 'monserrat',
                fontSize: 20,
                color: Colors.GRAY,
            }}>
                Budget
            </Text>
            <Text style={{
                fontFamily: 'monserrat-medium',
                fontSize: 20,
            }}>
                {tripData?.budget}
            </Text>
        </View>
        
        
      </View>
      <TouchableOpacity 
                      onPress={()=>onClickContinue()}
                      style={{
                          padding:15,
                          backgroundColor: Colors.PRIMARY,
                          borderRadius: 50,
                          marginTop: 80,
                      }}>
                      
                      
                          <Text style={{
                              textAlign: 'center',
                              color: Colors.WHITE,
                              fontSize: 20,
                              fontFamily: 'monserrat-medium',
                          }}>
                              Build my trip
                          </Text>
          </TouchableOpacity>       
    </View>
  )
}