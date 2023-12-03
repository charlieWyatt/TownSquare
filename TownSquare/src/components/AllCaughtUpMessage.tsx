import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	message: {
		color: "gray", // Set the text color to gray
		fontSize: 24, // Increase font size
		textAlign: "center", // Center text horizontally
        margin: 30
	},
	container: {
		justifyContent: "center", // Center content vertically in the container
		alignItems: "center", // Center content horizontally in the container
	},
});

const AllCaughtUpMessage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.message}>You are all caught up</Text>
		</View>
	);
};

export default AllCaughtUpMessage;
