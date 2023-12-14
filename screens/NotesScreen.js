import { Button, StyleSheet, Text, View } from "react-native";

const NotesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Notes Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default NotesScreen;