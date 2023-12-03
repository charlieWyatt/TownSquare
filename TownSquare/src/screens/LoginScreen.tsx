import React, { useState, useRef } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
	Animated,
} from "react-native";
import AuthService from "../services/auth";
import { useNavigation } from "@react-navigation/native";

type FadeViewProps = {
	children: React.ReactNode;
	style?: any;
	fadeAnim: Animated.Value;
};

const FadeView: React.FC<FadeViewProps> = ({ children, style, fadeAnim }) => {
	return (
		<Animated.View style={[style, { opacity: fadeAnim }]}>
			{children}
		</Animated.View>
	);
};

const LoginScreen: React.FC = () => {
	const [showLogin, setShowLogin] = useState(true);
	const fadeAnimLogin = useRef(new Animated.Value(1)).current;
	const fadeAnimSignUp = useRef(new Animated.Value(0)).current;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const navigation = useNavigation();

	const toggleForm = () => {
		Animated.timing(showLogin ? fadeAnimLogin : fadeAnimSignUp, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => {
			setShowLogin(!showLogin);
			Animated.timing(showLogin ? fadeAnimSignUp : fadeAnimLogin, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true,
			}).start();
		});
	};

	const handleLogin = async () => {
		const response = await AuthService.login(email, password);
		if (response) {
			// TODO: Make error codes and handle them
			navigation.goBack();
		}
	};

	const handleSignup = async () => {
		const response = await AuthService.signup(email, password, username);
		if (response) {
			// TODO: Make error codes and handle them
			navigation.goBack();
		}
	};

	return (
		<View style={styles.container}>
			<FadeView style={{ width: "100%" }} fadeAnim={fadeAnimLogin}>
				{showLogin && (
					<>
						<Text style={styles.title}>Login Screen</Text>
						<TextInput
							style={styles.input}
							placeholder="Username or Email"
							value={email}
							onChangeText={setEmail}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							secureTextEntry
							value={password}
							onChangeText={setPassword}
						/>
						<Button title="Login" onPress={handleLogin} />
						<TouchableOpacity onPress={toggleForm} style={styles.toggleButton}>
							<Text style={styles.toggleButtonText}>
								Don't have an account? Sign Up
							</Text>
						</TouchableOpacity>
					</>
				)}
			</FadeView>

			<FadeView style={{ width: "100%" }} fadeAnim={fadeAnimSignUp}>
				{!showLogin && (
					<>
						<Text style={styles.title}>Sign Up Screen</Text>
						<TextInput
							style={styles.input}
							placeholder="Username"
							value={username}
							onChangeText={setUsername}
						/>
						<TextInput
							style={styles.input}
							placeholder="Email"
							value={email}
							onChangeText={setEmail}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							value={password}
							onChangeText={setPassword}
							secureTextEntry
						/>
						<Button title="Sign Up" onPress={handleSignup} />
						<TouchableOpacity onPress={toggleForm} style={styles.toggleButton}>
							<Text style={styles.toggleButtonText}>
								Have an account? Login
							</Text>
						</TouchableOpacity>
					</>
				)}
			</FadeView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
	},
	toggleButton: {
		marginTop: 20,
		alignSelf: "center",
	},
	toggleButtonText: {
		color: "blue",
		textAlign: "center",
	},
});

export default LoginScreen;
