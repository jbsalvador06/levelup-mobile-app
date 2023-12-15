import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OptionsButton from "../components/OptionsButton";
import Timer from "../components/Timer";

const ClockScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.clockContainer}>
                <View style={styles.clockNavContainer}>
                    <Text>Study Timer</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsContainer}>
                    <OptionsButton title={'Pomodoro'}/>
                    <OptionsButton title={'Short Break'}/>
                    <OptionsButton title={'Long Break'}/>
                    <OptionsButton title={'Custom'}/>
                </View>
                <View style={styles.timer}>
                    <Timer />
                </View>
                <ScrollView style={styles.taskContainer}>
                    <View style={styles.taskNav}>
                        <Text>Tasks</Text>
                        <Text>Options</Text>
                    </View>
                    <View style={styles.tasks}>
                        <TouchableOpacity style={styles.addTask}>
                            <Text>Add Task</Text>
                        </TouchableOpacity>
                    </View>
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
    clockContainer: {
        backgroundColor: '#FBECB2',
        height: '100%',
        maxHeight: 'auto',
        width: '95%',
        borderWidth: 1,
    },
    clockNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    optionsContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    timer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskContainer: {
        borderWidth: 1,
        backgroundColor: '#F4C524',
        height: '100%',
        maxHeight: 'auto',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },
    taskNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    tasks: {
        padding: 10,
    },
    addTask: {
        backgroundColor: '#FBECB2',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 5,
        height: 50
    }
})

export default ClockScreen;