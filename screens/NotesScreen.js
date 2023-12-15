import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clock from "../components/Clock";
import Notes from "../components/Notes";

const NotesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Clock onPress={() => navigation.navigate('Clock')}/>
            <View style={styles.notesContainer}>
                <View style={styles.notesNavContainer}>
                    <Text>Notes</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.insideNotesContainer}>
                    <Notes header={'Note 1'} text={'This is a random note :D asdasdsaddasdasdasdsadsadsadsda'} />
                    <Notes header={'Note 2'} text={'This is also another random note *U*'} />
                    <Notes header={'Note 3'} text={'This is also another random note *U*'} />
                    <Notes header={'Note 4'} text={'This is also another random note *U*'} />
                    <Notes header={'Note 5'} text={'This is also another random note *U*'} />
                </ScrollView>
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
    notesContainer: {
        backgroundColor: '#FBECB2',
        height: '65%',
        width: '95%',
        borderWidth: 1,
    },
    notesNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
    },
    insideNotesContainer: {
        padding: 15,
        flex: 1,
    },
})

export default NotesScreen;