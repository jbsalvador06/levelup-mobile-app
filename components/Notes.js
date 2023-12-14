import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Notes = ({ header, text }) => {
    return (
        <View style={styles.notes}>
            <View style={styles.notesContentContainer}>
                <View>
                    <Text style={styles.notesHeader}>{header}</Text>
                </View>
                <View>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.notesContent}>{text}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.deleteButton}>
                    {/* <Text>Delete</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    notes: {
        flexDirection: 'row',
        backgroundColor: '#F4C524',
        borderWidth: 1,
        width: '100%',
        maxHeight: '30%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    notesContentContainer: {
        flexDirection: 'column',
    },
    notesHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    notesContent: {
        maxWidth: '90%',
        paddingBottom: 4
    },
    deleteButton: {
        backgroundColor: '#F18D8D',
        height: '100%',
        width: 30,
        borderWidth: 1,
    }
});

export default Notes;