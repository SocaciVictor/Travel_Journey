import { useNavigation, useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from "../../constants/Colors";
import { SelectBudgetOptions } from '../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';



export default function SelectBudget() {

    const navigation = useNavigation();
    const [selectedOption, setSelectedOption]=useState();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
          navigation.setOptions({
              headerShown: true,
              headerTransparent: true,
              headerTitle: 'Select Budget',
          });
      }, []);

      useEffect(() => {
       selectedOption&&setTripData({...tripData,
           budget:selectedOption?.title
        });
    }, [selectedOption]);

    const onClickContinue=()=>{
        if(!selectedOption){
             Toast.show({
                    type: 'error',
                    text1: 'Missing budget',
                    text2: 'Select a budget',
                    visibilityTime: 4000,
                    position: 'bottom',
                    autoHide: true
                  });
            return;
        }
        console.log(tripData?.budget);
        router.push('/create-trip/reviewTrip');
    }

  return (
    <View 
    style={{
                padding: 25,
                paddingTop: 90,
                backgroundColor: Colors.WHITE,
                height: '100%',
            }}>
      <Text
        style={{
                fontSize: 35,
                fontFamily: 'monserrat-extra-bold',
                marginTop: 20,
            }}>
        Budget
    </Text>

    <View style={{
        marginTop: 20,
    }}>
        <Text style={{
            fontFamily: 'monserrat',
            fontSize: 23,
            color: Colors.GRAY,
        }}>
            Choose your budget
        </Text>

        <FlatList 
            data={SelectBudgetOptions}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={()=>setSelectedOption(item)} style={{
                                        marginVertical: 10,
                                    }}>
                                        <OptionCard option={item} selectedOption={selectedOption}/>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id.toString()} 
        />

    </View>
    <TouchableOpacity 
                onPress={()=>onClickContinue()}
                style={{
                    padding:20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 50,
                    marginTop: 20,
                }}>
                
                
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.WHITE,
                        fontSize: 20,
                        fontFamily: 'monserrat-medium',
                    }}>
                        Continue
                    </Text>
    </TouchableOpacity>       
    <Toast />     
    </View>
  )
}