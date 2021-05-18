import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
	Thunderstorm: {
		iconName: "lightnings",
		colour: ["#232526", "#414345"],
		title: "Thunderstorm",
	},
	Drizzle: {
		iconName: "rain",
		colour: ["#1CD8D2", "#93EDC7"],
		title: "Drizzle",
	},
	Rain: {
		iconName: "rainy",
		colour: ["#ED4264", "#FFEDBC"],
		title: "Rain",
	},
	Snow: {
		iconName: "snowy",
		colour: ["#DAE2F8", "#D6A4A4"],
		title: "Snow",
	},
	Clear: {
		iconName: "day-sunny",
		colour: ["#EC6F66", "#F3A183"],
		title: "Sunny",
	},
	Clouds: {
		iconName: "cloudy",
		colour: ["#49a09d", "#5f2c82"],
		title: "Cloudy",
	},
	Mist: {
		iconName: "center-align",
		colour: ["#757F9A", "#D7DDE8"],
		title: "Mist",
	},
	Smoke: {
		iconName: "cloud",
		colour: ["#ECE9E6", "#ECE9E6"],
		title: "Smoky",
	},
	Haze: {
		iconName: "day-haze",
		colour: ["#134E5E", "#71B280"],
		title: "Hazy",
	},
	Dust: {
		iconName: "center-align",
		colour: ["#02AAB0", "#00CDAC"],
		title: "Dusty",
	},
	Fog: {
		iconName: "cloudy",
		colour: ["#348F50", "#56B4D3"],
		title: "Foggy",
	},
	Sand: {
		iconName: "nav-icon-grid-a",
		colour: ["#E55D87", "#5FC3E4"],
		title: "Sand",
	},
	Ash: {
		iconName: "nav-icon-grid-a",
		colour: ["#3D7EAA", "#FFE47A"],
		title: "Ash",
	},
	Squall: {
		iconName: "cloud-gusts",
		colour: ["#603813", "#b29f94"],
		title: "Squall",
	},
	Tornado: {
		iconName: "fog",
		colour: ["#283048", "#859398"],
		title: "Tornado",
	},
};

export default function Weather({ temp, condition, city, country }) {
	return (
		<>
			<LinearGradient
				colors={weatherOptions[condition].colour}
				style={styles.container}
			>
				<StatusBar barStyle="light-content" />
				<View style={styles.top}>
					<Fontisto
						name={weatherOptions[condition].iconName}
						size={100}
						color="white"
					/>
					<Text style={styles.temp}>{temp}º</Text>
				</View>
				<View style={{ ...styles.bottom, ...styles.textContainer }}>
					<Text style={styles.title}>{weatherOptions[condition].title}</Text>
					<Text style={styles.sub_title}>
						{city}, {country}
					</Text>
				</View>
			</LinearGradient>
		</>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Clear",
		"Clouds",
		"Mist",
		"Smoke",
		"Haze",
		"Dust",
		"Fog",
		"Sand",
		"Ash",
		"Squall",
		"Tornado",
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	top: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	temp: {
		fontSize: 32,
		color: "white",
	},
	bottom: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "white",
		fontWeight: "300",
		fontSize: 40,
		marginBottom: 10,
		textAlign: "center",
	},
	sub_title: {
		fontSize: 20,
		fontWeight: "600",
		color: "white",
		textAlign: "center",
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "center",
	},
});
