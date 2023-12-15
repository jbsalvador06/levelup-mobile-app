import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StudyTips = ({ header, text }) => {
    return (
        <View style={styles.studyTips}>
            <View style={styles.studyTipsContentContainer}>
                <View>
                    <Text style={styles.studyTipsHeader}>{ header }</Text>
                </View>
                <View>
                    <Text numberOfLines={5} ellipsizeMode="tail" style={styles.studyTipsContent}>{ text }</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.modifyButton}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    studyTips: {
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
    studyTipsContentContainer: {
        flexDirection: 'column',
    },
    studyTipsHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    studyTipsContent: {
        paddingBottom: 4,
    },
    modifyButton: {
        backgroundColor: '#81BBDC',
        height: '100%',
        width: 30,
        borderWidth: 1,
    }
})

export default StudyTips;