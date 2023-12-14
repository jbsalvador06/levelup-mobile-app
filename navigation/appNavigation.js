import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HUD from "../components/HUD";

// Screens
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <HUD />
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Details"
                    options={{ headerShown: false }}
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
