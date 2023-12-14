import {  } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8BDEB',
        height: '100%',
    }
})

export default HomeScreen;