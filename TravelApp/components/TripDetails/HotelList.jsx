import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function HotelList({hotelList}) {
  return (
    <View style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
    }}>
      <Text style={{
        fontFamily: 'monserrat-extra-bold',
        fontSize: 20,
      }}>
        🏨 Hotel Recommendation
    </Text>

        <FlatList 
        data={hotelList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
         renderItem={({ item, index }) => (
            <View style={{
                marginRight: 20,
                width: 180,
            }}>
                <Image
                 style={{
                    width:180,
                    height:120,
                    borderRadius:15,
                 }}   
                 source={require('../../assets/images/placeholder.jpg')}/>
                 <View style={{
                    padding: 5,
                 }}>
                    <Text style={{
                        fontFamily: 'monserrat-medium',
                        fontSize: 15,
                    }}>
                        {item.hotelName}
                    </Text>
                 </View>

                 <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginTop: 5,
                 }}>
                    <Text style={{
                        fontFamily:'monserrat',
                        fontSize: 12,
                    }}>
                    ⭐{item.rating}
                    </Text>
                    <Text style={{
                        fontFamily:'monserrat',
                        fontSize: 12,
                    }}>
                    💸{item.price}
                    </Text>
                 </View>
            </View>
         )}
        />
    </View>
  )
}