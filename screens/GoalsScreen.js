import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// Components
import Clock from "../components/Clock";
import Goals from "../components/Goals";

const GoalsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Clock />
            <View style={styles.goalsContainer}>
                <View style={styles.goalsNavContainer}>
                    <Text>Goals</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.insideGoalsContainer}>
                    <Goals />
                    <Goals />
                    <Goals />
                    <Goals />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8BDEB',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goalsContainer: {
        backgroundColor: '#FBECB2',
        height: '65%',
        width: '95%',
        borderWidth: 1
    },
    goalsNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    insideGoalsContainer: {
        padding: 15,
        flex: 1,
    }
});

export default GoalsScreen;