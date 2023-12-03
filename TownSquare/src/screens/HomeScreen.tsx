import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Feed from "../components/Feed";
import TweetService from "../services/tweet";
import { TweetType } from "../types";

const HomeScreen: React.FC = () => {
	const [tweets, setTweets] = useState<TweetType[]>([]);

	useEffect(() => {
		const fetchTweets = async () => {
			try {
				const fetchedTweets = await TweetService.getTweets();
				setTweets(fetchedTweets);
			} catch (error) {
				console.error("Failed to fetch tweets", error);
			}
		};

		fetchTweets();
	}, []);

	return (
		<View>
			<Feed data={tweets} />
		</View>
	);
};

export default HomeScreen;
