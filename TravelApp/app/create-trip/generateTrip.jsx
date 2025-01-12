import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { chatSession } from '../../config/AiModal';
import { auth, db } from '../../config/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import { AI_PROMPT } from '../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function GenerateTrip() {

    const { tripData, setTripData } = useContext(CreateTripContext);
    const [loading, setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;
    
    useEffect(() =>{
        GenerateAiTrip();
    },[])

    const GenerateAiTrip=async()=>{
        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT.replace(
            '{location}', tripData?.locationInfo?.name
        ).replace(
            '{totalDays}', tripData?.totalNoOfDays
        ).replace(
            '{totalNight}', tripData?.totalNoOfDays-1
        ).replace(
            '{traveler}', tripData?.traveler?.title
        ).replace(
            '{budget}', tripData?.budget
        )

        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        setLoading(false);

        const tripResp=JSON.parse(result.response.text());
        const docId=(Date.now()).toString();
        const result_ = await setDoc(doc(db, 'UserTrips', docId), {
            userEmail:user.email,
            tripPlan:tripResp, //AI generated trip
            tripData:JSON.stringify(tripData), //User input data
            docId:docId,
        });
      
        router.push('(tabs)/mytrip');

    }

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
        textAlign: 'center',
      }}>
        Please Wait...
      </Text>
      <Text style={{
        fontFamily: 'monserrat-extra-bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
      }}>
        We are generating your trip
      </Text>

     
    </View>
  )
}