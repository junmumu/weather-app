import React from 'react'
import { StyleSheet,View,Text,StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types'


const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: [
            "#373B44", "#4286f4"
        ],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"

    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: [
            "#89F7FE", "#66A6FF"
        ],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: [
            "#00C6FB", "#005BEA"
        ],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: [
            "#7DE2FC", "#B9B6E5"
        ],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: [
            "#FF7300", "#FEF253"
        ],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: [
            "#D7D2CC", "#304352"
        ],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: [
            "#4DA0B0", "#D39D38"
        ],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: [
            "#4DA0B0", "#D39D38"
        ],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: [
            "#4DA0B0", "#D39D38"
        ],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
};



function Weather({temp, condition}) {
    return (

        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={weatherOptions[condition].gradient[0]}></StatusBar>
            <View style={styles.half_container}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.half_container, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain","Snow","Atmosphere","Clear","Clouds","Dust","Haze","Mist"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    temp:{
        fontSize: 32,
        color:'white'
    },
    half_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'white',
        fontSize:44,
        fontWeight:"100",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle:{
        color:'white',
        fontWeight:"600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer : {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
})

export default Weather