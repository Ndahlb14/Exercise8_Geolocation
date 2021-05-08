import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'
import { weatherConditions } from '../utils/WeatherCondition'
import Geocoder from 'react-native-geocoding';

const Weahter = ({ weather, temperature, Locate }) => {
    
    
    return (
        <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
            <View style={styles.headerContainer}>
                <Text style={styles.tempText}>{temperature}°</Text>
                <Text style={styles.title}>{Locate}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
                <Text style={styles.subtitle}>Nada Halabee 1622086</Text>
            </View>
        </View>
    )
};

Weahter.Proptypes = {
    temperature: Proptypes.number.isRequired,
    weather: Proptypes.string
}


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tempText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
})
export default Weahter;