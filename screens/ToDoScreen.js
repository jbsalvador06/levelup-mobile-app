import { Button } from "react-native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// Components
import Clock from "../components/Clock";
import ToDo from "../components/ToDo";

const ToDoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Clock onPress={() => navigation.navigate('Clock')}/>
            <View style={styles.todoContainer}>
                <View style={styles.todoNavContainer}>
                    <Text>To Do</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.insideTodoContainer}>
                    <ToDo taskType={'small'}/>
                    <ToDo taskType={'small'}/>
                    <ToDo taskType={'big'}/>
                    <ToDo taskType={'big'}/>
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
    todoContainer: {
        backgroundColor: '#FBECB2',
        height: '65%',
        width: '95%',
        borderWidth: 1
    },
    todoNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    insideTodoContainer: {
        padding: 15,
        flex: 1,
    }
});

export default ToDoScreen;