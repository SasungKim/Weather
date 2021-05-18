import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="default" />
			<Text style={styles.text}>Getting Weather...</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: "skyblue",
	},
	text: {
		fontSize: 30,
		color: "#2c2c2c",
	},
});
