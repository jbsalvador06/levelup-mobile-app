import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
        </SafeAreaView>
    );
}

export default HomeScreen;