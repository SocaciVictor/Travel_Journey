import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
    }}>
        <Tabs.Screen name="mytrip" 
            options={{
                tabBarLabel: 'My Trip',
                tabBarIcon: ({color}) => (
                    <Entypo name="location" 
                    size={24} color="color" />
                )
            }}
        />
        <Tabs.Screen name="discover" 
            options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({color}) => (
                    <Entypo name="globe" 
                    size={24} color="color" />
                )
            }}
        />
        <Tabs.Screen name="profile" 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (
                    <AntDesign name="profile" 
                    size={24} color="color" />
                )
            }}
        />
    </Tabs>
  )
}