import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Details Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </SafeAreaView>
    );
}

export default DetailsScreen;