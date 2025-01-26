import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import UserTripList from '../../components/MyTrips/UserTripList';
import { auth, db } from '../../config/FirebaseConfig';
import { Colors } from '../../constants/Colors';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user=auth.currentUser;


  useEffect(() => {
    user&&GetMyTrips();
  }, []);

  const GetMyTrips=async()=>{
    setLoading(true);
    setUserTrips([]);
    const q=query(collection(db, "UserTrips"), where("userEmail", "==", user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev,doc.data()]);
    });
    setLoading(false);

  }
  
  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text style={{
          fontFamily: 'monserrat-bold',
          fontSize: 35,
        }}>
          My Trip
        </Text>
        <AntDesign name="pluscircleo" size={35} color="black"  
          onPress={() => router.push('/create-trip/search-place')}
        />
        
      </View>

      {loading&&<ActivityIndicator size={"large"} color={Colors.PRIMARY} />}

      {userTrips?.length == 0 ?
        <StartNewTripCard /> :
        <UserTripList userTrips={userTrips} />
      }
    </View>
  )
}