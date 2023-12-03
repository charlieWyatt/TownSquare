import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import TweetService from "../services/tweet";
import auth from "../services/auth";

const PostScreen: React.FC = () => {
	const [tweet, setTweet] = useState("");
	const navigation = useNavigation();

	const currentUser = auth.getCurrentUser();

	const handlePostTweet = async () => {
		if (!currentUser) {
			showMessage({
				message: "Error",
				description: "User not found. Please log in.",
				type: "danger",
			});
			return;
		}
		try {
			await TweetService.postTweet(currentUser, tweet);
			navigation.goBack();
		} catch (error) {
			console.error(error);
			showMessage({
				message: "Error",
				description: "Failed to post tweet.",
				type: "danger",
			});
		}
	};

	return (
		<View>
			<TextInput
				placeholder="What's happening?"
				value={tweet}
				onChangeText={setTweet}
			/>
			<Button title="Tweet" onPress={handlePostTweet} />
			<FlashMessage position="top" />
		</View>
	);
};

export default PostScreen;
