import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HUD from "../components/HUD";

// Screens
import HomeScreen from "../screens/HomeScreen";
import NotesScreen from "../screens/NotesScreen";
import ToDoScreen from "../screens/ToDoScreen";
import GoalsScreen from "../screens/GoalsScreen";
import FlashCardScreen from "../screens/FlashCardScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <HUD />
            <Stack.Navigator initialRouteName="Home" screenOptions={{ animation: 'slide_from_right' }}>
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Notes"
                    options={{ headerShown: false }}
                    component={NotesScreen}
                />
                <Stack.Screen
                    name="ToDo"
                    options={{ headerShown: false }}
                    component={ToDoScreen}
                />
                <Stack.Screen
                    name="Goals"
                    options={{ headerShown: false }}
                    component={GoalsScreen}
                />
                <Stack.Screen
                    name="Flash Card"
                    options={{ headerShown: false }}
                    component={FlashCardScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
