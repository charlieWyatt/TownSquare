import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/components/Navigation";

const Stack = createStackNavigator();

export default function App() {
	return <Navigation />;
}
