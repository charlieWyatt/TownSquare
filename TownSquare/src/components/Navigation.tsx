import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import SearchScreen from "../screens/SearchScreen";
import PostScreen from "../screens/PostScreen";
import LoginScreen from "../screens/LoginScreen";
import auth from "../services/auth";

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
	const user = auth.getCurrentUser();
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Search" component={SearchScreen} />
				{user ? (
					<>
						<Tab.Screen name="Notifications" component={NotificationsScreen} />
						<Tab.Screen name="Messages" component={MessagesScreen} />
						<Tab.Screen name="Profile" component={ProfileScreen} />
						<Tab.Screen name="Post" component={PostScreen} />
					</>
				) : (
					<Tab.Screen name="Login" component={LoginScreen} />
				)}
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
