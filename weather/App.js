import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "a72f3ad840fd0ea58f1983c3d26e0dde";

export default class extends React.Component {
	state = {
		isLoading: true,
	};

	getWeather = async (latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather,
			},
		} = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a72f3ad840fd0ea58f1983c3d26e0dde&units=metric`
		);
		this.setState({
			isLoading: false,
			temp,
			condition: weather[0].main,
		});
	};

	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();

			const [city] = await Location.reverseGeocodeAsync({
				latitude,
				longitude,
			});
			this.getWeather(latitude, longitude);
			this.setState({
				city: city.city,
				country: city.country,
			});
		} catch (error) {
			Alert.alert("Cannot find the location", "Too bad :(");
		}
	};

	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading, temp, condition, city, country } = this.state;
		return isLoading ? (
			<Loading />
		) : (
			<Weather
				temp={Math.round(temp)}
				condition={condition}
				city={city}
				country={country}
			/>
		);
	}
}
