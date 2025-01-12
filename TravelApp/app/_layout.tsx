import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import React, { useState } from 'react';
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {

  useFonts({
    'monserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
    'monserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'monserrat-extra-bold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  })
  
  const [tripData, setTripData] = useState([]);

  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
        <Stack screenOptions={{
          headerShown: false,
        }}>
          {/* <Stack.Screen name="index" options={{
            headerShown: false,
          }}/> */}
          <Stack.Screen name="(tabs)"/>
        </Stack>
    </CreateTripContext.Provider>
  );
}
