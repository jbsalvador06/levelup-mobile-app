import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clock from "../components/Clock";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Clock onPress={() => navigation.navigate('Clock')}/>
            <View style={styles.taskContainer}>
                <TouchableOpacity style={styles.taskButton} onPress={() => navigation.navigate('Notes')}>
                    <Text>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskButton} onPress={() => navigation.navigate('ToDo')}>
                    <Text>To Do</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.taskButton} onPress={() => navigation.navigate('Goals')}>
                    <Text>Goals</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bigTaskContainer}>
                <TouchableOpacity style={styles.bigTaskButton} onPress={() => navigation.navigate('Flash Card')}>
                    <Text>Flash Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bigTaskButton} onPress={() => navigation.navigate('Study Tips')}>
                    <Text>Study Tips</Text>
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
        height: '100%',
        justifyContent: 'center',
        marginBottom: 20,
        flex: 1
    },
    bigTaskButton: {
        backgroundColor: '#F4C524',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 4,
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;