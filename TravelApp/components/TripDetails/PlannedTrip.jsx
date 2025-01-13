import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors'; // Ensure Colors is correctly defined

export default function PlannedTrip({ itinerary }) {
    return (
        <ScrollView style={styles.container}>
            {itinerary?.map((day, dayIndex) => (
                <View key={dayIndex} style={styles.dayContainer}>
                    <Text style={styles.dayHeader}>📅 Day {day.day}</Text>
                    <Text style={styles.themeText}>🎭 Theme: {day.theme}</Text>
                    <Text style={styles.themeText}>⏰ Best Time to Visit: {day.bestTimeToVisit}</Text>
                    <Text style={styles.activitiesHeader}>🎟️ Activities:</Text>
                    {day.activities.map((activity, activityIndex) => (
                        <View key={activityIndex} style={styles.activityContainer}>
                            <Text style={styles.activityName}>📍 Activity Name: {activity.placeName}</Text>
                            <Text style={styles.activityDetail}>💲 Ticket Price: {activity.ticketPricing}</Text>
                            <Text style={styles.activityDetail}>🕒 Details: {activity.travelTime}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    dayContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dayHeader: {
        fontFamily: 'monserrat-extra-bold',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.DARK_GRAY,
    },
    themeText: {
        fontFamily: 'monserrat',
        fontSize: 16,
        marginBottom: 5,
        color: Colors.MEDIUM_GRAY,
    },
    activitiesHeader: {
        fontFamily: 'monserrat-extra-bold',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: Colors.PRIMARY,
    },
    activityContainer: {
        marginLeft: 10,
        marginTop: 5,
        padding: 5,
        backgroundColor: Colors.LIGHTER_GRAY,
        borderRadius: 8,
    },
    activityName: {
        fontFamily: 'monserrat',
        fontSize: 14,
        color: Colors.DARK_GRAY,
    },
    activityDetail: {
        fontFamily: 'monserrat',
        fontSize: 14,
        color: Colors.DEEP_GRAY,
    }
});
