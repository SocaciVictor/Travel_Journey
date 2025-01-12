import { Link, useNavigation } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from "../../constants/Colors";
import { SelectTravelesList } from '../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selectedTraveler,setSelectedTraveler]=useState();
    const { tripData, setTripData } = useContext(CreateTripContext);
    
    
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Traveler',
        });
    }, []);

    useEffect(() => {
        setTripData({...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler]);

    return (
        <View style={{
            padding: 25,
            paddingTop: 90,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <Text style={{
                fontSize: 35,
                fontFamily: 'monserrat-extra-bold',
                marginTop: 20,
            }}>
                Who's Traveling
            </Text>

            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'monserrat',
                    fontSize: 23,
                    color: Colors.GRAY,
                }}>
                    Choose your travelers
                </Text>

                <FlatList
                    data={SelectTravelesList}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={()=>setSelectedTraveler(item)} style={{
                            marginVertical: 10,
                        }}>
                            <OptionCard option={item} selectedTraveler={selectedTraveler}/>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()} 
                />

            </View>
            
           
            <TouchableOpacity 
            style={{
                padding:20,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 50,
                marginTop: 20,
            }}>
             <Link
             style={{
                width: '100%',  
                textAlign: 'center',
             }}
              href={'/create-trip/selectDates'}>
            
                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontSize: 20,
                    fontFamily: 'monserrat-medium',
                }}>
                    Continue
                </Text>
                </Link>
            </TouchableOpacity>            

        </View>
    );
}
