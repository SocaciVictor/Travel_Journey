import { API_KEY } from '@env';
import { useNavigation, useRouter } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {

  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();

  useEffect(() =>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
  })
    }, [])

    useEffect(()=>{
      console.log(tripData)
    }), [tripData]

  return (
    <View style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%',
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setTripData({
          locationInfo:{
            name: data.description,
            coordinates:details?.geometry.location,
            photoref:details?.photos[0].photo_reference,
            url:details?.url,
          }
        })

        router.push('/create-trip/selectTraveler')
      }}
      query={{
        key: API_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer:{
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 50,
        }
      }}
    />
    </View>
  )
}
