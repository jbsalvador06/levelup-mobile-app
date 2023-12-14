import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clock from "../components/Clock";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Clock />
            <View style={styles.taskContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
                    <View style={styles.taskButton}>
                        <Text>Notes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.taskButton}>
                        <Text>To Do</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.taskButton}>
                        <Text>Goals</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bigTaskContainer}>
                {/* Flash Card */}
                <TouchableOpacity>
                    <View style={styles.bigTaskButton}>
                        <Text>Flash Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bigTaskContainer}>
                {/* Study Tips */}
                <TouchableOpacity>
                    <View style={styles.bigTaskButton}>
                        <Text>Study Tips</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8BDEB',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    taskButton: {
        backgroundColor: '#F4C524',
        width: 60,
        height: 60,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigTaskContainer: {
        width: '80%',
    },
    bigTaskButton: {
        backgroundColor: '#F4C524',
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    }
})

export default HomeScreen;