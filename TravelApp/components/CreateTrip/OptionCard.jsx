import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
        padding:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius: 15,
    },selectedOption?.id==option?.id&&{
        borderWidth:3,
    }]}>
      <View>
        <Text style={{
            fontSize: 20,
            fontFamily: 'monserrat-extra-bold',
        }}>{option?.title}</Text>
        <Text style={{
            fontSize: 17,
            fontFamily: 'monserrat-medium',
            color: Colors.GRAY,
        }}>{option?.description}</Text>
        
      </View>
      <Text style={{
            fontSize: 35,
        }}>{option?.icon}</Text>

    </View>
  )
}