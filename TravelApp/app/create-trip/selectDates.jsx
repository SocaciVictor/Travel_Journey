import { useNavigation } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from "react-native-calendar-picker";
import Toast from 'react-native-toast-message';
import { Colors } from '../../constants/Colors';


export default function SelectDates() {

    const navigation = useNavigation();
    const [selectedStartDate, setSelectedStartDate] = useState();
    const [selectedEndDate, setSelectedEndDate] = useState();
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null); 
        }
        if (type=='START_DATE'){
            setStartDate(moment(date));
        }else
        {
            setEndDate(moment(date));
        }
    };

    const OnDateSelectionContinue =() =>{
        if (!startDate&&!endDate){
            Toast.show({
                     type: 'error',
                     text1: 'Missing fields',
                     text2: 'Please select start and end date',
                     visibilityTime: 4000,
                     position: 'bottom',
                     autoHide: true
                   });
            console.log("Salut");
            return;
        }
        const totalNoOfDays = endDate.diff(startDate,'days');
        console.log(totalNoOfDays);
    }
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Dates',
        })
    },[])

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
        Travel Dates
      </Text>

      <View style={{
        marginTop:30,
      }}>
        <CalendarPicker 
        onDateChange={onDateChange} 
        allowRangeSelection={true}
        minDate={new Date()}
        maxRangeDuration={10}
        selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
        }}
        selectedDayTextStyle={{
            color: Colors.WHITE,
        }}
        />
      </View>

     <TouchableOpacity 
                 onPress={OnDateSelectionContinue}
                 style={{
                     padding:20,
                     backgroundColor: Colors.PRIMARY,
                     borderRadius: 50,
                     marginTop: 20,
                     marginTop: 35,
                 }}>
                  {/* <Link
                  style={{
                     width: '100%',  
                     textAlign: 'center',
                  }}
                   href={''}> */}
                 
                     <Text style={{
                         textAlign: 'center',
                         color: Colors.WHITE,
                         fontSize: 20,
                         fontFamily: 'monserrat-medium',
                     }}>
                         Continue
                     </Text>
                     {/* </Link> */}
                 </TouchableOpacity>            

    </View>
  )
}