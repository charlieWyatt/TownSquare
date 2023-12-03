import React from "react";
import { FlatList, Text } from "react-native";
import { TweetType } from "../types/tweet";
import Tweet from "./Tweet";
import AllCaughtUpMessage from "./AllCaughtUpMessage"; // Import the component

type FeedProps = {
	data: TweetType[];
};

const Feed: React.FC<FeedProps> = ({ data }) => {
	return (
		<>
			<FlatList
				data={data}
				renderItem={({ item }) => <Tweet tweet={item} />}
				keyExtractor={(item) => item.id}
			/>
			<AllCaughtUpMessage />
		</>
	);
};

export default Feed;
