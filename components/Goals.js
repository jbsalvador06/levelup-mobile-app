import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Goals = () => {
    return (
        <View style={styles.goalsContainer}>
            <View style={styles.taskBar}>
                <View style={styles.progressBar}></View>
            </View>
            <View style={styles.goalsTasksContainer}>
                <View style={styles.checkBoxContainer}>
                    <View style={styles.checkBox}></View>
                </View>
                <View style={styles.taskContainer}>
                    <Text style={{ fontWeight: 'bold' }}>This is a header</Text>
                </View>
            </View>
            <View>
                <View style={styles.innerGoalsTaskContainer}>
                    <View style={styles.innerCheckBoxContainer}>
                        <View style={styles.innerCheckBox}></View>
                    </View>
                    <View style={styles.innerTaskContainer}>
                        <Text>This is an inner task</Text>
                    </View>
                </View>
                <View style={styles.innerGoalsTaskContainer}>
                    <View style={styles.innerCheckBoxContainer}>
                        <View style={styles.innerCheckBox}></View>
                    </View>
                    <View style={styles.innerTaskContainer}>
                        <Text>This is an inner task</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsContainer: {
        backgroundColor: '#F4C524',
        borderWidth: 1,
        borderBottomWidth: 0,
        width: '100%',
        marginBottom: 10
    },
    taskBar: {
        padding: 6,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar: {
        backgroundColor: '#85FF98',
        width: '100%',
        height: 20,
        borderWidth: 1
    },
    goalsTasksContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    checkBoxContainer: {
        padding: 8,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkBox: {
        backgroundColor: '#85FF98',
        width: 20,
        height: 20,
        borderWidth: 1,
    },
    taskContainer: {
        justifyContent: 'center',
        padding: 4
    },
    innerGoalsTaskContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    innerCheckBoxContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCheckBox: {
        backgroundColor: '#85FF98',
        width: 20,
        height: 20,
        borderWidth: 1
    },
    innerTaskContainer: {
        justifyContent: 'center',
        padding: 4
    }
});

export default Goals;